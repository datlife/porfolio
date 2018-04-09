import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Apollo for Server Communication
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

// Styling
// The following imports would define the stylings (font, colors)
// for the app. In this project, we use bootstrap and font-awesome.
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/init.css';

const client = new ApolloClient({
    uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
registerServiceWorker();
