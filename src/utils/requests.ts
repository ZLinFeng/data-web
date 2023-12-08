import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ElNotification} from "element-plus";

export interface Response {
    code: number,
    msg: string,
    data: any
}

export interface ResponseStrategy<T> {
    handleResponse(response: AxiosResponse<any>): T
}

export class DefaultResponseStrategy implements ResponseStrategy<any> {
    handleResponse(response: AxiosResponse<any>) {
        return response.data;
    }
}

export class HttpClient {
    private static instance: HttpClient;
    private axiosInstance: AxiosInstance;
    private responseStrategy: ResponseStrategy<any>;

    private constructor(config: AxiosRequestConfig) {
        this.axiosInstance = axios.create(config);
        this.axiosInstance.interceptors.request.use(
            this.addToken,
        );
        this.axiosInstance.interceptors.response.use(
            (res: AxiosResponse): AxiosResponse | Promise<AxiosResponse> => {
                return res;
            },
            this.exceptionHandle,
        );
        this.responseStrategy = new DefaultResponseStrategy();
    }

    private addToken(config: AxiosRequestConfig): AxiosRequestConfig {
        config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
        return config;
    }

    private exceptionHandle(error: AxiosError) {
        if (error && error.response) {
            ElNotification({
                title: "Error Code " + error.response.status,
                message: error.response.statusText,
                type: "error"
            });
        } else {
            ElNotification({
                title: "Network Error.",
                message: "Connection refused.",
                type: "error",
            });
        }
        return Promise.reject(error);
    }

    public async get(url: string, config?: AxiosRequestConfig) {
        return await this.axiosInstance.get(url, config)
            .then((data) => {
                return this.responseStrategy.handleResponse(data);
            });
    }

    public async post(url: string, data?: any, config?: AxiosRequestConfig) {
        let res = await this.axiosInstance.post(url, data, config);
        return this.responseStrategy.handleResponse(res);
    }

    public static getInstance(config: AxiosRequestConfig): HttpClient {
        if (!HttpClient.instance) {
            HttpClient.instance = new HttpClient(config);
        }
        return HttpClient.instance;
    }

    public setResponseStrategy(strategy: ResponseStrategy<any>): void {
        this.responseStrategy = strategy;
    }
}

export const httpClient = HttpClient.getInstance({
    baseURL: "http://gateway:11110/api",
    timeout: 10_000,
});