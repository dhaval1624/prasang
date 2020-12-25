import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import { Route } from 'react-router';
// import User from './user/index';

const upload = createUploadLink({
	uri: 'http://localhost:8080/graphql',
	headers: {
		"keep-alive": "true"
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
		<ApolloProvider client={client}>
			<Route path="/" render={ (props) => <Routes {...props} />} />
		</ApolloProvider>
	);
}

export default App;
