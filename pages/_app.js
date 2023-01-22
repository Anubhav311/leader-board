import "../styles/globals.css";
import { AuthProvider } from "../context/AuthContext";
import Layout from "../components/Layout";
// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
