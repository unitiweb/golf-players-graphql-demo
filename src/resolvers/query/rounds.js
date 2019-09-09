/**
 * Get all rounds
 *
 * @param parent The relation parent of any
 * @param data The submitted data if any
 * @param db The database connection
 *
 * @return [Round]
 */
module.exports = (parent, data, { db }) => {
  return db('Rounds')
}
