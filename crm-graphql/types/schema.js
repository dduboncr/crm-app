const { gql } = require('apollo-server');

const typedefs = gql`
	type User {
		id: ID
		name: String
		lastname: String
		email: String
		createdAt: String
		updatedAt: String
	}

	type Token {
		token: String
	}

	input UserInput {
		name: String!
		lastname: String!
		password: String!
		email: String!
	}

	input AuthInput {
		password: String!
		email: String!
	}

	type Query {
		getUsers: String
	}
	type Mutation {
		createUser(input: UserInput): User
		authenticateUser(input: AuthInput): Token
	}
`;

module.exports = typedefs;
