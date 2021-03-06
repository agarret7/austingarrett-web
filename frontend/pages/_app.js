import React from "react";  
import Head from "next/head";  
import { ApolloProvider } from "@apollo/react-hooks";  
import "../assets/css/style.css";  
import 'katex/dist/katex.min.css';
import withData from "../utils/apollo";
import Nav from "../components/nav";
import Footer from "../components/footer";

const App = ({ Component, pageProps, apollo }) => {  
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>αβγ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </ApolloProvider>
  )
};

// Wraps all components in the tree with the data provider
export default withData(App);
