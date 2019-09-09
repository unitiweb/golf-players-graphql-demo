const { GraphQLDate } = require('graphql-iso-date')
const Query = require('./query')
const Mutation = require('./mutation')
const Subscription = require('./subscription')
const Course = require('./relations/course')
const Player = require('./relations/player')
const Round = require('./relations/round')

module.exports = {
  Date: GraphQLDate,
  Query,
  Mutation,
  Subscription,
  Course,
  Player,
  Round
}
