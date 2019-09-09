const { withFilter } = require('graphql-yoga')

module.exports = {
  subscribe: withFilter(
    (parent, args, ctx) => ctx.pubsub.asyncIterator(ctx.config.channels.roundUpdated),
    (payload, variables) => {
      return variables.roundId === payload.roundUpdated.id
    }
  )
}
