/**
 * Add a new course with holes
 *
 * @param parent Parent object if any
 * @param course The course data submitted
 * @param db The database connection
 *
 * @return Course
 */
module.exports = async (parent, { course }, { db }) => {
  // Get the submitted values
  const { courseName, city, state, zip, holes } = course

  return db.transaction(async (trx) => {
    // Create the course
    const [id] = await trx('Courses').insert({
      courseName,
      city,
      state,
      zip
    })

    // If holes is not an array then set it as an empty array
    let courseHoles = []
    if (Array.isArray(holes)) courseHoles = holes

    // Create the course holes
    for (let i = 1; i <= 18; i++) {
      // Find hole if it was submitted
      let hole = courseHoles.find(hole => hole.number === i)

      // If hole was not submitted then add the number and default values
      if (!hole) {
        hole = {
          number: i,
          par: 0,
          handicap: 0
        }
      }

      // Set hole defaults if none exists
      if (!hole.par) hole.par = 0
      if (!hole.handicap) hole.handicap = 0

      // Create the course hole entry
      await trx('CourseHoles').insert({
        courseId: id,
        ...hole
      })
    }

    // Get the newly created course and return
    return trx('Courses').where('id', id).first()
  })
}
