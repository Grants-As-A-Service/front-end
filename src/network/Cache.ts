export default class Cache {
    ttl: number;
    data: any;

    constructor(ttl: number) {
        this.ttl = ttl;
        this.data = undefined;
    }

    addToCache(data: any) {
        this.data = data;
        setTimeout(() => {
            this.data = undefined;
        }, this.ttl);
    }

    cacheExists() {
        if (this.data) {
            return true;
        } else {
            return false;
        }
    }

    getCache() {
        return this.data;
    }
}
