import { manageDevHeaders } from "./HeaderManager";
import { Requestor } from "./Requestor";

const address = "http://127.0.0.1:4500";

export const connect = (requestor: Requestor): Promise<any> => {
    return new Promise((resolve, reject) => {
        let request = requestor.toObject();

        const req = new XMLHttpRequest();

        req.onload = (e) => {
            manageDevHeaders(req)
            resolve(req.response);
        };
        req.onerror = (e) => {
            console.log(req.statusText)
            reject(req.statusText);
        };

        req.open(request.method, address + request.url);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        
        req.send(JSON.stringify(request.body));
    });
};
