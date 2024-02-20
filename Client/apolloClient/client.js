import {ApolloClient, InMemoryCache, ApolloLinkk} from '@apollo/client';
import IP_Address from "../variables/variable"

const client = new ApolloClient({
  uri: `http://${IP_Address}:3002/graphql`,
  cache: new InMemoryCache(),
});
 
export default client;