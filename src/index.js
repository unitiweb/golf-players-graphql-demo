require('dotenv').config()
const { GraphQLServer, PubSub } = require('graphql-yoga')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')

// Context items
const db = require('./database')
const helpers = require('./helpers')
const pubsub = new PubSub()

const { PORT } = process.env

const server = new GraphQLServer({
    typeDefs: importSchema(`${__dirname}/schema.graphql`),
    resolvers,
    context: {
        db,
        helpers,
        pubsub
    }
})

const options = {
    port: PORT,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
}

server.start(options, ({ port }) =>
  console.log(
    `Service is listening on port ${port}`,
  ),
)
