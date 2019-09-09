/**
 * Update the given round hole's data
 *
 * @param parent
 * @param args
 * @param ctx
 *
 * @return RoundHole
 */
module.exports = async (parent, args, ctx) => {
  const { roundId, hole: { number, score } } = args
  const { db, config: { channels }, pubsub } = ctx

  // Get the round's hole
  const hole = await db('RoundHoles')
    .where('roundId', roundId)
    .where('number', number)
    .first()

  // If the round's hole does not exist then throw an error
  if (!hole) throw new Error('The round hole does not exist')

  // Update the hole score
  const result = await db('RoundHoles')
    .where('roundId', roundId)
    .where('number', number)
    .update({ score })

  // If the update failed then throw an error
  if (!result) throw new Error('The round hole could not be updated')

  // Fetch and return the updated round hole
  const roundHole = await db('RoundHoles')
    .where('roundId', roundId)
    .where('number', number)
    .first()

  // Get the hole's parent round and publish it to the round updated subscription
  const round = await db('Rounds').where('id', hole.roundId).first()
  pubsub.publish(channels.roundUpdated, { roundUpdated: round })

  // Return the updated hole
  return roundHole
}
