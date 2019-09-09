/**
 * Get one player
 *
 * @param parent The relation parent of any
 * @param data The data submitted if any
 * @param db The database connection
 *
 * @return Player
 */
module.exports = (parent, { id }, { db }) => {
  return db('Players').where('id', id).first()
}
