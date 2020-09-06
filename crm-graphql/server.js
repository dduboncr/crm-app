const { ApolloServer } = require('apollo-server');

const typeDefs = require('./types/schema');
const resolvers = require('./resolvers');
const connectdb = require('./db');

// connect db on start
connectdb();

const server = new ApolloServer({
	typeDefs,
	resolvers,
});
server.listen().then(({ url }) => console.log(`Server running on ${url}`));
