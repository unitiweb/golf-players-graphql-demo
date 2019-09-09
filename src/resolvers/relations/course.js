
module.exports = {
  /**
   * Get all course holes for the parent course
   *
   * @param id The parent course id
   * @param data The submitted data
   * @param db The database connection
   *
   * @return [CourseHoles]
   */
  holes: ({ id }, data, { db }) => {
    return db('CourseHoles').where('courseId', id).orderBy('number', 'asc')
  },

  /**
   * Get all rounds played at this course
   *
   * @param id The course id
   * @param data The submitted data if any
   * @param db The database connection
   *
   * @return [Round]
   */
  rounds: ({ id }, data, { db }) => {
    return db('Rounds').distinct().where('courseId', id)
  },

  /**
   * Get the total number of rounds played at this course
   *
   * @param id The course id
   * @param data The submitted data if any
   * @param db The database connection
   *
   * @return Int
   */
  roundsCount: async ({ id }, data, { db }) => {
    const results = await db('Rounds').distinct().where('courseId', id).count('id as total').first()
    return results.total
  },

  /**
   * Get all players that have played this course
   *
   * @param id The course id
   * @param data The submitted data if any
   * @param db The database connection
   *
   * @return [Player]
   */
  players: ({ id }, data, { db }) => {
    return db('Rounds')
      .distinct()
      .select('Players.*')
      .join('Courses', 'Rounds.courseId', 'Courses.id')
      .join('Players', 'Rounds.playerId', 'Players.id')
      .where('Rounds.courseId', id)
  },

  /**
   *
   * @param id The course id
   * @param data The submitted data if any
   * @param db The database connection
   *
   * @return Int
   */
  par: async ({ id }, data, { db }) => {
    const result = await db('CourseHoles')
      .where('courseId', id)
      .sum('par as total')
      .first()

    return result.total
  }
}
