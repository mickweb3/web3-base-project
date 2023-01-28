import { CacheKey, EventKey, TEST_TOKEN } from '@/config/constant';
import AbortController from 'abort-controller';
import { request } from 'umi';
import { eventBus } from './eventBus';

export let controller = new AbortController();

const reset = (e: Event) => {
    if (e.currentTarget.aborted) {
        controller = new AbortController();
        controller.signal.onabort = (e: Event) => reset(e);
    }
};

controller.signal.onabort = reset;

export type RequestMethod = 'GET' | 'POST' | 'DELETE' | 'PUT';

export interface FusibleRequest {
    url: string;
    method?: RequestMethod;
    data?: any;
    headers?: HeadersInit;
    requestType?: 'json' | 'form';
    dialog?: boolean;
}

export interface FusibleResponse {
    code: number;
    message: string | null;
    result: any;
}

export interface FusibleError {
    code: number;
    message: string | null;
}

export async function fusibleRequest(props: FusibleRequest): Promise<FusibleResponse> {
    try {
        const { url, method = 'GET', data = {}, headers, requestType, dialog = false } = props;
        const _headers = { ...headers, ['Authorization']: TEST_TOKEN ?? localStorage.getItem(CacheKey.RELATION_TOKEN) };
        const result = await request(url, {
            signal: controller?.signal,
            errorHandler: null,
            method,
            requestType,
            headers: _headers,
            ...(method === 'GET' ? { params: data } : { data }),
        });
        if (result.code > 0) {
            dialog && fail({ message: result.message });
            return Promise.reject(result);
        }
        return result;
    } catch (error: any) {
        switch (+error.data?.code) {
            case 40001: {
                localStorage.removeItem(CacheKey.RELATION_TOKEN);
                eventBus.$emit(EventKey.UNAUTHORIZED);
                break;
            }
        }
        return Promise.reject(error.data);
    }
}
