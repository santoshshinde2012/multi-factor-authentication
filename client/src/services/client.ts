import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponseTransformer } from 'axios';

function client(apiUrl: string, header = {}): AxiosInstance {
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

export {
    client
}