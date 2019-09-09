require('dotenv').config()
const { GraphQLServer, PubSub } = require('graphql-yoga')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')
const { PORT } = process.env

// Context items
const db = require('./database')
const config = require('./config')
const helpers = require('./helpers')
const pubsub = new PubSub()

// Configure the graphql server
const server = new GraphQLServer({
    typeDefs: importSchema(`${__dirname}/schema.graphql`),
    resolvers,
    context: {
        db,
        config,
        helpers,
        pubsub
    }
})

// Server options
// For more options visit https://github.com/prisma/graphql-yoga
const options = {
    port: PORT,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground' // set to false to disable the playground
}

// Start the graphql server
server.start(options, ({ port }) =>
  console.log(`Service is listening on port ${port}`),
)
