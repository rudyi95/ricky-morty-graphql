import React, { Suspense } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import Layout from "./containers/layout";

import "./App.css";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<CircularProgress />}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Suspense>
    </ApolloProvider>
  );
};

export default App;
