export default class Cache {
    ttl: number;
    data: any;

    constructor() {
        this.ttl = 500;
        this.data = undefined;
    }

    addToCache(data: any) {
        this.data = data;
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

    clearCache() {
        this.data = undefined;
    }
}
