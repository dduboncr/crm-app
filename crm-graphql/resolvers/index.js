const User = require('../models/User');

const { createUser, getUsers, authenticateUser } = require('./userResolver');

const resolvers = {
	Query: {
		getUsers,
	},
	Mutation: {
		createUser,
		authenticateUser,
	},
};

module.exports = resolvers;
