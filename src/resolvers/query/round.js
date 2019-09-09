/**
 * Get the round by id
 *
 * @param parent The parent if any
 * @param id The round id to get the roudn for
 * @param db The database connection
 *
 * @return Round
 */
module.exports = async (parent, { id }, { db }) => {
  return db('Rounds').where('id', id).first()
}
