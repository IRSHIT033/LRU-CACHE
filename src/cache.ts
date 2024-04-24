export class LRUCache {
    private cache: Map<any, any>;
    private capacity: number;
    constructor(capacity: number) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key: any) {
        if (!this.cache.has(key)) return undefined;

        let val = this.cache.get(key)!;

        this.cache.delete(key);
        this.cache.set(key, val);

        return val;
    }

    // Implementing Put method
    put(key: any, value: any) {
        this.cache.delete(key);

        if (this.capacity && this.cache.size === this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
            this.cache.set(key, value);
        } else {
            this.cache.set(key, value);
        }
    }

}

