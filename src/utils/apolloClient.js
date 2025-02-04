import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
    return new ApolloClient({
        link: new HttpLink({
            uri: 'http://localhost:4000/graphql'
        }),
        cache: new InMemoryCache()
    });
};

export default createApolloClient;
