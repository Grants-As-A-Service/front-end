import { activateBanner } from "../components/items/banner";
import { Requestor } from "./Requestor";

const address = "http://127.0.0.1:4500";

const decipherHeaders = (xhr: XMLHttpRequest): {} => {
    var arr = xhr.getAllResponseHeaders().split("\r\n");
    var headers = arr.reduce(function (acc, current, i) {
        var parts = current.split(": ");
        //@ts-ignore
        acc[parts[0]] = parts[1];
        return acc;
    }, {});
    return headers;
};

export const connect = (requestor: Requestor): Promise<any> => {
    return new Promise((resolve, reject) => {
        let request = requestor.toObject();

        const req = new XMLHttpRequest();

        req.onload = (e) => {
            let headers = decipherHeaders(req) as any;
            if (headers.hasOwnProperty("set-fake-cookie")) {
                let fakeCookie = headers["set-fake-cookie"].split(";");
                console.log(fakeCookie);
                window.setCookie(fakeCookie[0], fakeCookie[1] + ";");
            }
            resolve(req.response);
        };
        req.onerror = (e) => {
            reject(req.response);
        };

        req.open(request.method, address + request.url);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        req.send(JSON.stringify(request.body));
    });
};
