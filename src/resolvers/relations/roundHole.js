module.exports = {
  /**
   * Get the round for the parent round hole
   *
   * @param roundId The parent round hole's round id
   * @param data The submitted data
   * @param db The database connection
   *
   * @return Round
   */
  round: ({ roundId }, data, { db }) => {
    return db('Rounds').where('id', roundId).first()
  },

  /**
   * Get the course for the parent round hole
   *
   * @param roundId The parent round hole's round id
   * @param data The submitted data
   * @param db The database connection
   *
   * @return Course
   */
  course: ({ roundId }, data, { db }) => {
    return db('Courses')
      .join('Rounds', 'Courses.id', 'Rounds.courseId')
      .where('Rounds.id', roundId)
      .first()
  },

  /**
   * Get the course hole for the parent round hole
   *
   * @param roundId The parent round hole's round id
   * @param number The round hole number
   * @param data The submitted data
   * @param db The database connection
   *
   * @return CourseHole
   */
  courseHole: ({ roundId, number }, data, { db }) => {
    return db('CourseHoles')
    .join('Rounds', 'CourseHoles.courseId', 'Rounds.courseId')
    .where('Rounds.id', roundId)
    .where('CourseHoles.number', number)
    .first()
  }
}
