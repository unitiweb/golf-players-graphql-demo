module.exports = {
  /**
   * Get the course for the parent round
   *
   * @param id The parent round id
   * @param data The submitted data
   * @param db The database connection
   *
   * @return [RoundHole]
   */
  holes: ({ id }, data, { db }) => {
    return db('RoundHoles').where('roundId', id).orderBy('number', 'asc')
  },

  /**
   * Get the round's score
   *
   * @param id The round id
   * @param data The submitted data if any
   * @param db The database connection
   *
   * @return Int
   */
  score: async ({ id }, data, { db }) => {
    const result = await db('RoundHoles').where('roundId', id).sum('score as total').first()
    return result.total
  },

  /**
   * Get the course for the parent round
   *
   * @param round The parent Round
   * @param data The submitted data
   * @param db The database connection
   *
   * @return Course
   */
  course: ({ courseId }, data, { db }) => {
    return db('Courses').where('id', courseId).first()
  },

  /**
   * Get the player for the parent round
   *
   * @param playerId The player id for the parent round
   * @param data The submitted data if any
   * @param db The database connection
   *
   * @return Player
   */
  player: ({ playerId }, data, { db }) => {
    return db('Players').where('id', playerId).first()
  }
}
