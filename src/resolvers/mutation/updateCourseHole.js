/**
 * Update the given course hole's data
 *
 * @param parent
 * @param data
 * @param ctx
 *
 * @return RoundHole
 */
module.exports = async (
  parent,
  { courseId, hole: { number, par, handicap } },
  { db }
) => {
  // Get the course's hole
  const hole = await db('CourseHoles')
    .where('courseId', courseId)
    .where('number', number)
    .first()

  // If the course's hole does not exist then throw an error
  if (!hole) throw new Error('The course hole does not exist')

  // Update the hole score
  const result = await db('CourseHoles')
    .where('courseId', courseId)
    .where('number', number)
    .update({ par, handicap })

  // If the update failed then throw an error
  if (!result) throw new Error('The course hole could not be updated')

  // Fetch and return the updated course hole
  return db('CourseHoles')
    .where('courseId', courseId)
    .where('number', number)
    .first()
}
