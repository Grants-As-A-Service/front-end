type AnyFunction = (...args: any) => any;

export default class EventManager {
    listeners: Map<string, Array<AnyFunction>>;

    constructor() {
        this.listeners = new Map();
    }

    addListener(name: string, listener: AnyFunction) {
        if (!this.listeners.has(name)) {
            this.listeners.set(name, []);
        }
        (this.listeners.get(name) as Array<AnyFunction>).push(listener);
    }

    removeListener(name: string, listener: AnyFunction) {
        if (this.listeners.has(name)) {
            this.listeners.get(name)?.filter((value: AnyFunction) => value === listener);
        }
    }

    emit(name: string, data: any) {
        if (this.listeners.has(name)) {
            this.listeners.get(name)?.forEach((listener) => {
                listener(data);
            });
        }
    }
}
