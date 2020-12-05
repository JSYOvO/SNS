// import ApolloServer from 'apollo-server';
// import gql from 'graphql-tag';
const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');

const { MONGODB } = require('./config.js');
const resolvers = require('./graphql/resolvers/index');
const typeDefs = require('./graphql/typeDefs');

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) =>({ req, pubsub })
});

mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("MongoDB Connected");
    return server.listen({port : 5000});
})
.then((res) => {
    console.log(`Server running at ${res.url}`);
});