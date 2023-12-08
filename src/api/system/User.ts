import {LoginForm, RegisterForm} from "@/api/system/type.ts";
import {httpClient, HttpClient, ResponseStrategy} from "@/utils/requests.ts";
import {AxiosResponse} from "axios";
import {AUTH_ERR, SYS_ERR} from "@/constants/ResponseCode.ts";
import {ElMessage, ElNotification} from "element-plus";
import router from "@/router";

enum UserAPI {
    LOGIN_URL = "/sys/auth/login",
    REGISTER_URL = "/sys/auth/register"
}

class LoginAndRegisterStrategy implements ResponseStrategy<string> {
    handleResponse(response: AxiosResponse<any>): string {
        return (response.data.data as string);
    }
}

class LoginStrategy implements ResponseStrategy<void> {
    handleResponse(response: AxiosResponse<any>): void {
        let code = response.data.code;
        switch (code) {
            case AUTH_ERR:
                ElMessage({
                    type: "error",
                    message: "Wrong username or password.",
                });
                break;
            case SYS_ERR:
                ElMessage({
                    type: "error",
                    message: "Internal Server Error.",
                });
                break;
            default:
                localStorage.setItem("token", response.data.data);
                router.push("/dashboard").then((_) => {
                    ElNotification(
                        {
                            title: "Success",
                            type: "success",
                            message: "Welcome to Giraffe."
                        }
                    )
                });
        }
        return undefined;
    }
}

export const login = (data: LoginForm) => {
    const client: HttpClient = httpClient;
    client.setResponseStrategy(new LoginStrategy());
    return client.post(UserAPI.LOGIN_URL, data);
}

export const register = (data: RegisterForm) => {
    const client: HttpClient = httpClient;
    client.setResponseStrategy(new LoginAndRegisterStrategy());
    return client.post(UserAPI.REGISTER_URL, data);
}