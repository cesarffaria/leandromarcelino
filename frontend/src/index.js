import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import { ApolloProvider } from "@apollo/react-hooks";

import App from './containers/App';

import client from "./utils/apolloClient";

import "./index.css";


// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  const root = hydrateRoot(rootElement);
  root.render(
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>,
  );
} else {
  const root = createRoot(rootElement);
  root.render(
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>,
  );
}




// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

