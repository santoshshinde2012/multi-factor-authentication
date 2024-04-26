import { AxiosResponse } from 'axios';
import { client } from './client';

const apiUrl = import.meta.env.VITE_APP_API_URL;
const READY = 'mfa/ready';
const GENERATE = 'mfa/generate';
const VERIFY = 'mfa/verify';
const VALIDATE = 'mfa/validate';
const RESET = 'mfa/reset';

async function ready<T>(payload: T): Promise<AxiosResponse> {
    const response = await client(apiUrl).post(READY, payload);
    return response;
}


async function generate<T>(payload: T): Promise<AxiosResponse> {
    const response = await client(apiUrl).post(GENERATE, payload);
    return response;
}


async function verify<T>(payload: T): Promise<AxiosResponse> {
    const response = await client(apiUrl).post(VERIFY, payload);
    return response;
}


async function validate<T>(payload: T): Promise<AxiosResponse> {
    const response = await client(apiUrl).post(VALIDATE, payload);
    return response;
}

async function reset<T>(payload: T): Promise<AxiosResponse> {
    const response = await client(apiUrl).post(RESET, payload);
    return response;
}

export {
    ready,
    generate,
    verify,
    validate,
    reset
}