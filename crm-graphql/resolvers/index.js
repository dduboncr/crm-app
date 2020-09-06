const User = require('../models/User');

const { createUser } = require('./userResolver');

const resolvers = {
	Query: {
		getUsers: () => 'my users',
	},
	Mutation: {
		createUser,
	},
};

module.exports = resolvers;
