/**
 * Get a list of rounds with the given round ids
 *
 * @param parent The parent if any
 * @param roundIds An array of round ids to be added to the scorecard
 * @param db The database connection
 * @param helpers The helpers object

 * @return [Round]
 */
module.exports = async (parent, { roundIds }, { db, helpers }) => {
  // Limit the number of rounds that can be added
  if (roundIds.length > 5) {
    throw new Error('You can only have a max of 5 rounds in a score card')
  }

  // Get the rounds with the given roundIds
  const rounds = await db('Rounds').whereIn('id', roundIds)

  // Check that all rounds are at the same course
  if (helpers.checkRoundsCourse(rounds) === false) {
    throw new Error('All the scorecard rounds must be played at the same course on the same day')
  }

  // Since there was not errors lets return the rounds
  return rounds
}
