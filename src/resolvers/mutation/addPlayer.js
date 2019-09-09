/**
 * Add a new player
 *
 * @param parent
 * @param playerName The new player's name
 * @param db The database connection
 *
 * @return Player
 */
module.exports = async (parent, { playerName }, { db }) => {
  const [id] = await db('Players').insert({ playerName })
  return db('Players').where('id', id).first()
}
