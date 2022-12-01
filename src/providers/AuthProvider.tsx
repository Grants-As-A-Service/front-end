import { createContext, useState } from "react";

export type Account = {
    name: string;
    email: string;
};

type AuthContextADT = {
    isLoggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
    accountData: Account | {};
};

const getAccountData = () => {
    return {
        name: "magnus",
        email: "magnusreeves@rogers.com",
    };
};

export const AuthContext = createContext<AuthContextADT>({} as AuthContextADT);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(() => true /*window.getCookie("auth")*/);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, accountData: isLoggedIn ? getAccountData() : {} }}>{children}</AuthContext.Provider>
    );
};
