type Req = { url: string; method: string; body: any; responseType: ResponseType; };
type Method = "POST" | "GET";
type ResponseType = "JSON" | "text"

export class Requestor {
    url: string;
    method: string;
    body: any;
    responseType: ResponseType;

    constructor(url: string, method: string, responseType: ResponseType, body: any) {
        this.url = url;
        this.method = method;
        this.body = body;
        this.responseType = responseType;
    }

    toObject(): Req {
        return {
            url: this.url,
            method: this.method,
            body: this.body,
            responseType: this.responseType
        };
    }
}

export class RequestBuilder {
    url: string | undefined;
    method: string | undefined;
    body: any | undefined;
    responseType: ResponseType | undefined;

    setResponseType(responseType: ResponseType) {
        this.responseType = responseType
        return this
    }

    setURL(url: string) {
        this.url = url;
        return this;
    }

    setMethod(method: Method) {
        this.method = method;
        return this;
    }

    setBody(body: any) {
        this.body = body;
        return this;
    }

    build(): Requestor {
        return new Requestor(
            this.url as string, 
            this.method as string, 
            this.responseType as ResponseType, 
            this.body as any
        );
    }
}
