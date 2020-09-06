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
	input UserInput {
		name: String!
		lastname: String!
		password: String!
		email: String!
	}

	type Query {
		getUsers: String
	}
	type Mutation {
		createUser(input: UserInput): User
	}
`;

module.exports = typedefs;
