const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } =require('./schema');

const {db} = require('./db');
const {Category} = require('./resolvers/Category');
const {Mutation} = require('./resolvers/Mutation');
const {Product} = require('./resolvers/Product');
const {Query} = require('./resolvers/Query');
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query:Query,
        Mutation:Mutation,
        Category:Category,
        Product:Product
    },
    context: {
   db
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});