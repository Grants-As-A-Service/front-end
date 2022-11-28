import { createContext, useMemo, useState } from "react"

type AuthContextADT = {
    isLoggedIn: boolean,
    setLoggedIn: (loggedIn: boolean) => void
}

export const AuthContext = createContext<AuthContextADT>({} as AuthContextADT)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false)

    //could use different pattern here for checking auth state when page loads
    useMemo(() => {
        //check here for logged in and set it
    },[])

    return (
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}