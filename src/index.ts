import {LRUCache} from "./cache";

type CallbackFunctionVariadicAnyReturn = (...args: any[]) => any;

function cache(
    fn: CallbackFunctionVariadicAnyReturn,
    capacity?: number
) {
    const cache = new LRUCache(capacity!);
    return (...args: any[]) => {
        const key = JSON.stringify(args);
        if (cache.get(key) !== undefined) {
            return cache.get(key);
        } else {
            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
    }
}

export {cache}













