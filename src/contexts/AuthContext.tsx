import { createContext, type ReactNode } from "react"

export const AuthContext = createContext({})

export function AuthProvider({children}: {children: ReactNode}){
    return (
        <AuthContext.Provider value={{name: "Diogo Carvalho"}}>
            {children}
        </AuthContext.Provider>
    )
}