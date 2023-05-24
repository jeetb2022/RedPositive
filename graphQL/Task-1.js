const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } =require('./schema');

const {products} =require('./db');

const {categories} =require('./db');

const {reviews} = require('./db');

const {Category} = require('./resolvers/Category');
const {Product} = require('./resolvers/Product');
const {Query} = require('./resolvers/Query');
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query:Query,
        Category:Category,
        Product:Product
    },
    context: {
      categories,
      products,
      reviews
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});