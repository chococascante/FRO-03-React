import React from "react";
import { Routes } from "./routes";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { CookiesProvider } from 'react-cookie';

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    // <CookiesProvider>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
    // </CookiesProvider>
  );
}

export default App;
