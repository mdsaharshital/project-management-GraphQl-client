import Header from "./components/Header";
import { ApolloProvider, ApolloClient } from "@apollo/client";
import Client from "./components/Client";
import { cache } from "./Cache/Cache";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Client />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
