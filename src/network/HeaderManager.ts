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

export const manageDevHeaders = (xhr: XMLHttpRequest) => {
    let headers = decipherHeaders(xhr) as any;

    if (headers.hasOwnProperty("set-fake-cookie")) {
        let fakeCookie = headers["set-fake-cookie"].split(";");
        console.log(fakeCookie);
        window.setCookie(fakeCookie[0], fakeCookie[1] + ";");
    }
};
