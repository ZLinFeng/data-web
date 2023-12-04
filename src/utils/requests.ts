import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

export interface ResponseStrategy {
    handleResponse(response: AxiosResponse<any>): any
}

class DefaultResponseStrategy implements ResponseStrategy {
    handleResponse(response: AxiosResponse<any>): any {
        console.log(response)
    }
}

class HttpClient {
    private static instance: HttpClient;
    private axiosInstance: AxiosInstance;
    private responseStrategy: ResponseStrategy;

    private constructor(config: AxiosRequestConfig) {
        this.axiosInstance = axios.create(config);
        this.axiosInstance.interceptors.request.use(
            this.addToken,
        );
        this.responseStrategy = new DefaultResponseStrategy();
    }

    private addToken(config: AxiosRequestConfig): AxiosRequestConfig {
        config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
    }

    public async get(url: string, config?: AxiosRequestConfig) {
        const response = await this.axiosInstance.get(url, config);
        return this.responseStrategy.handleResponse(response);
    }

    public async post(url: string, config?: AxiosRequestConfig) {
        const response = await this.axiosInstance.post(url, config);
        return this.responseStrategy.handleResponse(response);
    }

    public static getInstance(config: AxiosRequestConfig): HttpClient {
        if (!HttpClient.instance) {
            HttpClient.instance = new HttpClient(config);
        }
        return HttpClient.instance;
    }

    public setResponseStrategy(strategy: ResponseStrategy): void {
        this.responseStrategy = strategy
    }
}

export const httpClient = HttpClient.getInstance({
    baseURL: "/api",
    timeout: 10_000,
});