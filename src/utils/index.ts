import { message } from 'antd';
import { ErcTokenProps } from '@/components-typing';
import dayjs from 'dayjs';
import { generateFromString } from 'generate-avatar';
import { eventBus } from '@/utils/eventBus';
import { ethers } from 'ethers';
import { EventKey } from '@/config/constant';

const stringify = require('json-stable-stringify');
export const getRequestSign = async (method, url, param) => {
    const req = {
        method: method,
        url: url.substring(url.indexOf('/ugc/')),
        param: param ? stringify(param) : '',
        time: Math.floor(Date.now() / 1000),
    };
    const hash = ethers.utils.sha256(
        ethers.utils.hexlify(ethers.utils.toUtf8Bytes(`${req.method}${req.url}${req.param}${req.time}`)),
    );
    console.log('req:', JSON.stringify(req));
    console.log('hash: ', hash);
    eventBus.$emit(EventKey.REQUEST_SIGN, hash);
    return new Promise((resolve, reject) => {
        eventBus.$on(EventKey.SIGN_RESULT, (sign) => {
            resolve(sign);
        });
    });
};
export const formatDate = (ts) => {
    const date = new Date(ts);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).replace(/^(\d{1})$/, '0$1')}-${String(
        date.getDate(),
    ).replace(/^(\d{1})$/, '0$1')}`;
};

export function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        message.success('Copy Successfully');
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        message.error('Copy Failed');
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

export function allSettled(promises) {
    return Promise.allSettled(promises).then((results) =>
        results.filter((result) => result.status === 'fulfilled').map((result: any) => result.value),
    );
}

export const formatTimestamp = (timestamp: number | string) => {
    return dayjs(timestamp).format('YYYY/MM/DD');
};

export const formatAddress = (address: string, left: number = 6, right: number = -7) => {
    return address && `${address.slice(0, left)}...${address.slice(right)}`;
};

export const matchKeywords = (list: LabelModel[], keywords: string, keys?: string[]) => {
    return list.filter((t) => {
        if (keywords) {
            if (new RegExp(`${keywords}`, 'i').test(t.content)) {
                return true;
            }
            if (Array.isArray(keys) && keys.some((k) => new RegExp(`${keywords}`, 'i').test(t[k]))) {
                return true;
            }
            return false;
        }
        return true;
    });
};

export const withoutAll = (list: ErcTokenProps[]): ErcTokenProps[] => {
    if (!list) return [];

    return list.filter((item) => !/all/i.test(item.name));
};

export const capitalize = (s: string): string => {
    return s.replace(/^(\w{1})/i, (matched) => matched.toUpperCase());
};

// ✅ Promise check
export function isPromise(p) {
    if (typeof p === 'object' && typeof p.then === 'function') {
        return true;
    }

    return false;
}

// ✅ Check if return value is promise
export function returnsPromise(f) {
    if (f.constructor.name === 'AsyncFunction' || (typeof f === 'function' && isPromise(f()))) {
        console.log('✅ Function returns promise');
        return true;
    }

    console.log('⛔️ Function does NOT return promise');
    return false;
}

export const genAvatar = (id: string) => {
    return id ? `data:image/svg+xml;utf8,${generateFromString(String(id))}` : '';
};

export const sleep = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('ok'), ms);
    });
};

export const scrollToAnchor = (anchorName) => {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if (anchorElement) {
            anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
    }
};

export const getPropDeep = (obj: any, path: string) => {
    return path.split('.').reduce(function (prev, curr) {
        return prev ? prev[curr] : null;
    }, obj || self);
};

export const formatNumber = (num: number, digits: number) => {
    const si = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'k' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'G' },
        { value: 1e12, symbol: 'T' },
        { value: 1e15, symbol: 'P' },
        { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
};


export const preloadAssets = (assets: any[]) => {
    for (const asset of assets) {
        const image = new Image();
        image.src = asset;
    }
};
