import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
// import { AuthContextProvider } from './components/AuthContext/AuthContext'
import { Auth0Provider } from "@auth0/auth0-react";
import '../public/global.css'


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ChakraProvider>
      <Auth0Provider
        domain="dev-licoizz8w0pomjyu.us.auth0.com"
        clientId="TzUWBerNkUGIKvlqv93rok3vy24Itbig"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <App />
      </Auth0Provider >
    </ChakraProvider>
  </BrowserRouter>


)




