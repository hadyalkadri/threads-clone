import express from 'express';
import bodyParser from 'body-parser';
import './config/db';
import {ApolloServer} from 'apollo-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers'; //we do not add index here because JS can detect any file nemaed "index" automatically
import constants from './config/constants';
import mocks from './data/index';



const hostname = '192.168.1.104';
const port = process.env.port || 3002;

const app = express();


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//graphql setup

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const graphQLServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true
})

const main = async () => {
    try {
        await graphQLServer.start()
        graphQLServer.applyMiddleware({app})
    }
    catch (err) {
        throw err;
    }
}

main();
//here we start the express server app


// app.get('/', ( req, res, next ) => {
//     res.send({'message':"Welcome to the Twitter Clone app"})
// });

//1 - we will use the express app to listen when not enabling graphiql

// mocks().then(() => {
    app.listen(port, hostname, ( err) => {
        if (err){
            console.log(JSON.stringify(err))
        }
        else {
            console.log(`Server is running at http://${hostname}:${port}/graphql`)
        }
    });
    
// })

