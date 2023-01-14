const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    bookCount: Int
    email: String!
    savedBooks: [Book]!
  }
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }
  input BookInput {
    authors: [String]
    bookId: String!
    description: String!
    title: String!
    image: String
    link: String
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
