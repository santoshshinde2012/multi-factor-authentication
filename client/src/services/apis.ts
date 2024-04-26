import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig, AxiosResponseTransformer } from 'axios';

const apiUrl = import.meta.env.VITE_APP_API_URL;
const READY = 'mfa/ready';
const GENERATE = 'mfa/generate';
const VERIFY = 'mfa/verify';
const VALIDATE = 'mfa/validate';
const RESET = 'mfa/reset';

function client(header = {}): AxiosInstance {
    // cancelToken and source declaration
    const cancelTokenSource = axios.CancelToken.source();

    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...header,
    };

    // axios client config
    const config: AxiosRequestConfig = {
        baseURL: apiUrl,
        cancelToken: cancelTokenSource.token,
        headers,
    };

    function transformResponse(
        input: string
    ): AxiosResponseTransformer | AxiosResponseTransformer[] {
        return JSON.parse(input);
    }
    // axios client response transformer
    config.transformResponse = [
        (data) => {
            return data && typeof data === "string"
                ? transformResponse(data)
                : data;
        },
    ];

    // create axios client
    return axios.create(config);
}

async function ready<T>(payload: T): Promise<AxiosResponse> {
    const response = await client().post(READY, payload);
    return response;
}


async function generate<T>(payload: T): Promise<AxiosResponse> {
    const response = await client().post(GENERATE, payload);
    return response;
}


async function verify<T>(payload: T): Promise<AxiosResponse> {
    const response = await client().post(VERIFY, payload);
    return response;
}


async function validate<T>(payload: T): Promise<AxiosResponse> {
    const response = await client().post(VALIDATE, payload);
    return response;
}

async function reset<T>(payload: T): Promise<AxiosResponse> {
    const response = await client().post(RESET, payload);
    return response;
}

export {
    ready,
    generate,
    verify,
    validate,
    reset
}