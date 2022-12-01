import { Requestor } from "./Requestor";
import axios, { AxiosResponse } from "axios";

const address = "http://192.168.2.223:8080";

export const connect = (requestor: Requestor): Promise<any> => {
    return new Promise((resolve, reject) => {
        let request = requestor.toObject();
        axios({
            method: request.method,
            url: address + request.url,
            data: request.body,
        })
            .then((response: AxiosResponse) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error.toJSON().status);
            });
    });
};
