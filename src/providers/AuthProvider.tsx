import { createContext, useEffect, useState } from "react";
import { swapScreen } from "../components";

export type Account = {
    name: string;
    email: string;
};

type AuthContextADT = {
    isLoggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
    accountData: Account | null;
};

const getAccountData = () => {
    let cookie = window.getCookie("auth");
    if (cookie) {
        return cookie;
    } else {
        return null;
    }
};

export const AuthContext = createContext<AuthContextADT>({} as AuthContextADT);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(() => (window.getCookie("auth") ? true : false));

    const toggleLogin = (loggedIn: boolean) => {
        if (loggedIn) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
            window.eraseCookie("auth");
            swapScreen('Home')
        }
    };

    useEffect(() => {
        const listener = () => {
            console.log("triggered");
            setLoggedIn(true);
        };
        window.addEventListener("cookie-added", listener);

        return () => window.removeEventListener("cookie-added", listener);
    });

    return <AuthContext.Provider value={{ isLoggedIn, setLoggedIn: toggleLogin, accountData: getAccountData() }}>{children}</AuthContext.Provider>;
};
