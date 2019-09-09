
module.exports = {
  /**
   * Get the total number of rounds played at this player
   *
   * @param id The player id
   * @param data The submitted data if any
   * @param db The database connection
   *
   * @return Int
   */
  roundsCount: async ({ id }, data, { db }) => {
    const results = await db('Rounds')
      .distinct()
      .where('playerId', id)
      .count('id as total')
      .first()

    return results.total
  },

  /**
   * Get the total number of courses played at this player
   *
   * @param player The parent player
   * @param data The submitted data if any
   * @param db The database connection
   *
   * @return Int
   */
  coursesCount: async (player, data, { db }) => {
    const results = await db('Rounds')
      .countDistinct('courseId as total')
      .first()

    return results.total
  },

  /**
   * Get all courses played by the player
   *
   * @param player The player (parent relationship)
   * @param data The submitted data
   * @param db The database connection
   *
   * @return [Course]
   */
  courses: (player, data, { db }) => {
    return db('Rounds')
      .select('Courses.*')
      .distinct()
      .join('Courses', 'Rounds.courseId', 'Courses.id')
      .join('Players', 'Rounds.playerId', 'Players.id')
      .where('Rounds.playerId', player.id)
  },

  /**
   * Get all the rounds played by the parent player
   *
   * @param player The player (parent relationship)
   * @param data The submitted data
   * @param db The database connection
   *
   * @return [Round]
   */
  rounds: (player, data, { db }) => {
    return db('Rounds')
      .join('Players', 'Rounds.playerId', 'Players.id')
      .where('Rounds.playerId', player.id)
  }
}
