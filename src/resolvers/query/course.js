/**
 * Get all courses
 *
 * @param parent The relation parent of any
 * @param id The course id
 * @param db The database connection
 *
 * @return [Course]
 */
module.exports = (parent, { id }, { db }) => {
  return db('Courses').where('id', id).first()
}
