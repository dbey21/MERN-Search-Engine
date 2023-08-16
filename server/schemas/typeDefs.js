const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
   id:ID!
   username:String
   email:String
   bookCount: Int
   savedBooks[String]
  }

  type Book {
    id: ID!
    authors:[String]
    description: String
    image:String
    link:String
    title:String
  }

  type Query {
    me: User
  }

  type Mutation {
    createUser(body: User!): User
    login (email: String!, password: <PASSWORD>!) : AuthPayload
    saveBook(input:BookInput):User
    removeBook(bookId:ID) : User
    
  }
  type Auth{
    token:ID!
    user:User
  }
`;

module.exports = typeDefs;
