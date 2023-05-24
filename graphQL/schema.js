const { gql } = require("apollo-server");
exports.typeDefs = gql`
type Query{
    hello: String!,
    products(filter: inputFilterProduct):[Product!]!,
    product(id: ID!):Product,
    catagories:[Category!]
    category(id: ID!):Category
}
type Product {
    name: String!,
    id:ID!
    description: String!,
    quantity: Int!,
    price: Float! ,
    image: String!,
    onSale: Boolean!,
    categoryId: String!
    category: Category,
    review: [Review!]!
}
type Category{
  name:String!,
  id:ID!,
  products: [Product!]
}
type Mutation{
    addCategory(input: inputCategory):Category!,
    deleteCategory(id: ID!): Boolean!
}
type Review{
    id: String!,
    date: String!,
    title: String!,
    comment: String!,
    rating: Int!,
    productId: String!,
}
input inputFilterProduct{
    onSale: Boolean!,
}
input inputCategory{
    name: String!
}
`;