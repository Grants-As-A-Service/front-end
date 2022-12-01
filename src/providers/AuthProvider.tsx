import { createContext, useState } from "react";

type Account = {
    name: string;
    email: string;
};

type AuthContextADT = {
    isLoggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
    accountData?: Account;
};

export const AuthContext = createContext<AuthContextADT>({} as AuthContextADT);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(() => window.getCookie("auth"));

    return <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>{children}</AuthContext.Provider>;
};
