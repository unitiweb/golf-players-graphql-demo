/**
 * Update the given round hole's data
 *
 * @param parent
 * @param data
 * @param ctx
 *
 * @return RoundHole
 */
module.exports = async (parent, { roundId, hole: { number, score } }, { db, config }) => {
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
  return db('RoundHoles')
    .where('roundId', roundId)
    .where('number', number)
    .first()
}
