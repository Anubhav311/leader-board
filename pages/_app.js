import "../styles/globals.css";
import { AuthProvider } from "../context/AuthContext";
// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
          <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
