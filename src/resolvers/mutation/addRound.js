/**
 * Add a new round with holes
 *
 * @param parent Parent object if any
 * @param round The round data submitted
 * @param db The database connection
 *
 * @return Round
 */
module.exports = async (parent, { round }, { db }) => {
  // Get the submitted values
  const { playerId, courseId, roundDate, holes } = round

  // Make sure the player exists
  const player = await db('Players').where('id', playerId).first()
  if (!player) throw new Error('The player does not exist')

  // Make sure the course exists
  const course = await db('Courses').where('id', courseId).first()
  if (!course) throw new Error('The course does not exist')

  return db.transaction(async (trx) => {
    // Create the round
    const [id] = await trx('Rounds').insert({
      playerId,
      courseId,
      roundDate
    })

    // If holes is not an array then set it as an empty array
    let roundHoles = []
    if (Array.isArray(holes)) roundHoles = holes

    // Create the round holes
    for (let i = 1; i <= 18; i++) {
      // Find hole if it was submitted
      let hole = roundHoles.find(hole => hole.number === i)

      // If hole was not submitted then add the number and default score
      if (!hole) {
        hole = {
          number: i,
          score: 0
        }
      }

      // Create the round hole entry
      await trx('RoundHoles').insert({
        roundId: id,
        number: hole.number,
        score: hole.score
      })
    }

    // Get the newly created round and return
    return trx('Rounds').where('id', id).first()
  })
}
