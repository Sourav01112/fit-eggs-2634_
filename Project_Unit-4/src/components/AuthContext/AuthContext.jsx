import { createContext } from "react";


export const AuthContext = createContext()

export const AuthContextProvider = (props) => {



    return (
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    )
}