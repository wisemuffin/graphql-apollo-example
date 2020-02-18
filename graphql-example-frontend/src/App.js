import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import ApolloConsumerExample from "./Components/ApolloConsumerExample";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
  // uri: "https://48p1r2roz4.sse.codesandbox.io"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ApolloConsumerExample />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
