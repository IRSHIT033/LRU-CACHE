export class LRUCache {
    private cache: Map<any, any>;
    private capacity: number;
    constructor(capacity: number) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key: any) {
        // IF not capacity specified will work as a normal Cache
        if (this.capacity === undefined) {
            return this.cache.get(key)
        }
        // Cache miss
        if (!this.cache.has(key)) return undefined;
        // Cache hit - move the item to the end (most recently used)
        let val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    }

    set(key: any, value: any) {
        // IF not capacity specified will work as a normal Cache
        if (this.capacity === undefined) {
            this.cache.set(key, value);
            return;
        }

        if (this.cache.has(key)) {
            // If key already exists, delete it first to move it to the end
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            // If cache is full, remove the least recently used item
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }

        // Insert the new key-value pair at the end (most recently used)
        this.cache.set(key, value);
    }

}

