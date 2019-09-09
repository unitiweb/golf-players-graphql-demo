/**
 * Get all holes for the given courses
 *
 * @param parent The relation parent of any
 * @param courseId The course id
 * @param db The database connection
 *
 * @return [CourseHoles]
 */
module.exports = (parent, { courseId }, { db }) => {
  return db('CourseHoles').where('courseId', courseId).orderBy('number', 'asc')
}
