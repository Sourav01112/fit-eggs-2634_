import { createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    if(isAuthenticated)

    return (
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    )
}