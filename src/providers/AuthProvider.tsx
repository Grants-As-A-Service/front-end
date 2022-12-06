import { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { AccountInfoADT } from "../types";

type AuthContextADT = {
    isLoggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
    accountData: AccountInfoADT | null;
};

export const AuthContext = createContext<AuthContextADT>({} as AuthContextADT);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(() => (getAccountData() ? true : false));

    const toggleLogin = (loggedIn: boolean) => {
        if (loggedIn) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
            window.eraseCookie("auth");
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

const getAccountData = () => {
    const cookies = new Cookies();
    let cookie = cookies.get("auth");
        
    if (cookie) {
        return cookie;
    } else {
        return null;
    }
};