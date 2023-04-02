import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
export const PrivateRoute = (props) => {

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    // const [showAlert, setShowAlert] = useState(false);

    if (!isAuthenticated) {
        loginWithRedirect();
        return null;
    }

    return (
        props.children
    )
}
