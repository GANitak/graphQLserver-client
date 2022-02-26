const { ApolloServer } = require("apollo-server")
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => {
	console.log(`API is RUNNING at: ${url}`);
});
