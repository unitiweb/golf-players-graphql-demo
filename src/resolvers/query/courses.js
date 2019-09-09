/**
 * Get all courses
 *
 * @param parent The relation parent of any
 * @param data The data submitted if any
 * @param db The database connection
 *
 * @return [Player]
 */
module.exports = (parent, data, { db }) => {
  return db('Courses')
}
