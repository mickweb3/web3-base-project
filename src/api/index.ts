import { fusibleRequest } from '@/utils/fusibleRequest';

export const PREFIX = `${process.env.EKS}/api/ugc-gateway/ugc/public/v1`;
export const PREFIX_PRIVATE = `${process.env.EKS}/api/ugc-gateway/ugc/private/v1`;

export let apiHeaders = {};

export interface PaginationProps {
    orderBy?: string;
    pageNum: number;
    pageSize: number;
}

export function login(publicKey: string, serviceName: string, sign: string, time: number) {
    return fusibleRequest({
        url: `${process.env.EKS}/api/ugc-gateway/sso/public/v1/identity`,
        method: 'POST',
        data: { address: publicKey, serviceName, sign, time },
    });
}

