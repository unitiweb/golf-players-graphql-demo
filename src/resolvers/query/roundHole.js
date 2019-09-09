/**
 * Get a hole for the given round id and hole number
 *
 * @param parent The relation parent of any
 * @param roundId The round id
 * @param number The hole number
 * @param db The database connection
 *
 * @return RoundHole
 */
module.exports = (parent, { roundId, number }, { db }) => {
  const hole = db('RoundHoles')
    .where('roundId', roundId)
    .where('number', number)
    .orderBy('number', 'asc')
    .first()

  if (!hole) throw new Error('The given round hole does not exist')

  return hole
}
