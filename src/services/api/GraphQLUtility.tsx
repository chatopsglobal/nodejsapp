import { ApolloClient } from "apollo-client";
import * as fetch from "isomorphic-fetch";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

/** This is a sample client which will be refines as part of next sprint */

export function createClient() {
    const httpLink = {
        uri: "https://nyzn6kviaveznhifi6pjljchcy.appsync-api.us-east-1.amazonaws.com/graphql", 
		fetch, 
        headers: {
          "Content-Type": "application/graphql", 
          "x-api-key": "da2-h6iitmu7ore5plyn5wzwa6vcla"
        }
      };
      return( new ApolloClient({
        link: new HttpLink(httpLink),
        cache: new InMemoryCache()
      }));
}

export const fetchData = (query, type, param) => (
    async () => {
        const paramName = {};
        if(type === "q"){
            paramName.q=param;
        }
        else if(type === "id") {
            paramName.id=param;
        }
        else{
            console.log("Received an unexpected parameter!!!");
        }
        const client = createClient();
        const { data } = await client.query( {
        query: query ,
          variables:  paramName 
        });
        console.log(JSON.stringify(data));
        return data;
      }
    );
