import React from 'react';
import {Route,Switch} from 'react-router-dom';
import { ApolloClient, InMemoryCache,ApolloProvider,createHttpLink, ApolloLink  } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserMain from './user/UserMain';

const upload = createUploadLink({
    uri:'http://localhost:8080/graphql',
    headers:{
        "keep-alive":"true"
    }
})
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('userToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(upload), 
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <Switch>
        <ApolloProvider client={client}>
          <Route path="/user" component={UserMain}/>
        </ApolloProvider>
      </Switch>
  );
}

export default App;
