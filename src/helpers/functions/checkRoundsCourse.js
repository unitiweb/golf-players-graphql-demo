const moment = require('moment')

/**
 * Check that all the rounds were played on the same course
 *
 * @param rounds An array of rounds
 *
 * @return boolean
 */
module.exports = (rounds) => {
  // Make sure that rounds is an array
  if (!Array.isArray(rounds)) {
    throw new Error('checkRoundsCourse : rounds must be an array')
  }

  // Make sure that rounds is a non-empty array
  if (rounds.length === 0) {
    return false
  }

  // Get the course id and round date for the first round
  let courseId = rounds[0].courseId
  let roundDate = rounds[0].roundDate

  // If any of the rounds are on a different course then return false
  // If any of the rounds were played on different days then return false
  for (let i = 0; i < rounds.length; i++) {
    if (rounds[i].courseId !== courseId || !moment(rounds[i].roundDate).isSame(roundDate)) {
      return false
    }
  }

  // Since all is well we return true
  return true
}
