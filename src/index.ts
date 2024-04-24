import {LRUCache} from "./cache";

type CallbackFunctionVariadicAnyReturn = (...args: any[]) => any;

export default function cache(
    fn: CallbackFunctionVariadicAnyReturn,
    capacity?: number
) {
    const cache = new LRUCache(capacity!);
    return function cachedFn(...args: any[]) {
        const key = JSON.stringify(args);
        if (cache.get(key) !== undefined) {
            return cache.get(key);
        } else {
            const result = fn(...args);
            cache.put(key, result);
            return result;
        }
    }
}






