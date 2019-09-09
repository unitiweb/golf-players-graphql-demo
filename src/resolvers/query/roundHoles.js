/**
 * Get all holes for the given round
 *
 * @param parent The relation parent of any
 * @param roundId The round id
 * @param db The database connection
 *
 * @return [RoundHoles]
 */
module.exports = (parent, { roundId }, { db }) => {
  return db('RoundHoles').where('roundId', roundId).orderBy('number', 'asc')
}
