import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    Alert, AlertIcon, AlertTitle, AlertDescription, Box,
    IconButton, Container, Text

} from "@chakra-ui/react";
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'



export const PrivateRoute = (props) => {

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const [showAlert, setShowAlert] = useState(false);

    // if (!isAuthenticated) {
    //     loginWithRedirect();
    //     return null;
    // }
    const ChakraBox = chakra(motion.div, {
        /**
         * Allow motion props and non-Chakra props to be forwarded.
         */
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    });

    if (!isAuthenticated) {
        return (

            <Container mt='-100px' h="100vh" display="flex" alignItems="center" justifyContent="center">
                <ChakraBox
                    animate={{
                        scale: [1, 2, 3, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["10%", "20%", "50%", "10%", "20%"],
                    }}
                    // @ts-ignore no problem in operation, although type error appears.
                    transition={{
                        duration: 3.8,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    padding="2"
                    // bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bg='#E11B23'
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="130px"
                    height="130px"
                >
                    <Text color='white' textAlign={'center'} p='4'>Please Login to proceed! <br />
                        Thank you!</Text>
                </ChakraBox>
            </Container >


        );

    }

    return (
        props.children
    )
}
