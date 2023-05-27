const { ApolloServer } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car {
    id: ID!
    color: String!
    make: String!
  }
  type ManualGroup {
    id:ID!,
    name: String!,
    imageId:ID!,
    bodyHTML:String!
  }
  type AutomaticGroup {
    id:ID!,
    name: String!,
    imageId:ID!,
    bodyHTML:String!,
    features: [AutomaticGroupFeatures!]
  }
  type GroupFeatures{
    feature: GroupFeatureValues
  }

  enum GroupFeatureValues {
    HYBRID_ENGINE
    AUTOMATIC 
    FOUR_CYLINDER
    BLACK_PAINT
    RED_PAINT
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      cars: () => [{ id: 1, color: "blue", make: "Toyota" }],
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
