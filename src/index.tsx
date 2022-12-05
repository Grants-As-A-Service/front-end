import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import test from './test'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

declare global {
    interface Window {
        getCookie: (cookie: string) => any;
        setCookie: (cookie: string, data: string) => any;
        eraseCookie: (cookie: string) => void;
    }
}

test()

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
