const players = [
  { id: 1, playerName: 'Dave Torres' },
  { id: 2, playerName: 'Phil Mickelson' },
  { id: 3, playerName: 'Bubba Watson' },
  { id: 4, playerName: 'Jack Nicklaus' }
]

const courses = [
  {
    id: 1,
    courseName: 'SunRiver Golf Club',
    city: 'St. George',
    state: 'UT',
    zip: '84790',
    holes: [
      { number: 1, par: 4, handicap: 5 },
      { number: 2, par: 4, handicap: 7 },
      { number: 3, par: 3, handicap: 11 },
      { number: 4, par: 4, handicap: 9 },
      { number: 5, par: 4, handicap: 13 },
      { number: 6, par: 4, handicap: 15 },
      { number: 7, par: 5, handicap: 1 },
      { number: 8, par: 3, handicap: 17 },
      { number: 9, par: 4, handicap: 3 },
      { number: 10, par: 4, handicap: 6 },
      { number: 11, par: 3, handicap: 14 },
      { number: 12, par: 5, handicap: 10 },
      { number: 13, par: 4, handicap: 2 },
      { number: 14, par: 3, handicap: 18 },
      { number: 15, par: 5, handicap: 12 },
      { number: 16, par: 3, handicap: 8 },
      { number: 17, par: 5, handicap: 16 },
      { number: 18, par: 4, handicap: 4 }
    ]
  }, {
    id: 2,
    courseName: 'Pebble Beach Golf Links',
    city: 'Pebble Beach',
    state: 'CA',
    zip: '93953',
    holes: [
      { number: 1, par: 4, handicap: 8 },
      { number: 2, par: 5, handicap: 10 },
      { number: 3, par: 4, handicap: 12 },
      { number: 4, par: 4, handicap: 16 },
      { number: 5, par: 3, handicap: 14 },
      { number: 6, par: 5, handicap: 2 },
      { number: 7, par: 3, handicap: 18 },
      { number: 8, par: 4, handicap: 6 },
      { number: 9, par: 4, handicap: 4 },
      { number: 10, par: 4, handicap: 7 },
      { number: 11, par: 4, handicap: 5 },
      { number: 12, par: 3, handicap: 17 },
      { number: 13, par: 4, handicap: 9 },
      { number: 14, par: 5, handicap: 1 },
      { number: 15, par: 4, handicap: 13 },
      { number: 16, par: 4, handicap: 11 },
      { number: 17, par: 3, handicap: 15 },
      { number: 18, par: 5, handicap: 3 }
    ]
  }, {
    id: 3,
    courseName: 'Augusta National Golf Club',
    city: 'Augusta',
    state: 'GA',
    zip: '30904',
    holes: [
      { number: 1, par: 4, handicap: 9 },
      { number: 2, par: 5, handicap: 1 },
      { number: 3, par: 4, handicap: 13 },
      { number: 4, par: 3, handicap: 15 },
      { number: 5, par: 4, handicap: 5 },
      { number: 6, par: 3, handicap: 17 },
      { number: 7, par: 4, handicap: 11 },
      { number: 8, par: 5, handicap: 3 },
      { number: 9, par: 4, handicap: 7 },
      { number: 10, par: 4, handicap: 6 },
      { number: 11, par: 4, handicap: 8 },
      { number: 12, par: 3, handicap: 16 },
      { number: 13, par: 5, handicap: 4 },
      { number: 14, par: 4, handicap: 12 },
      { number: 15, par: 5, handicap: 2 },
      { number: 16, par: 3, handicap: 18 },
      { number: 17, par: 4, handicap: 14 },
      { number: 18, par: 4, handicap: 10 }
    ]
  }, {
    id: 4,
    courseName: 'Carbon Country Club',
    city: 'Helper',
    state: 'UT',
    zip: '84526',
    holes: [
      { number: 1, par: 4, handicap: 7 },
      { number: 2, par: 4, handicap: 9 },
      { number: 3, par: 4, handicap: 11 },
      { number: 4, par: 4, handicap: 1 },
      { number: 5, par: 4, handicap: 3 },
      { number: 6, par: 3, handicap: 15 },
      { number: 8, par: 3, handicap: 5 },
      { number: 7, par: 5, handicap: 17 },
      { number: 9, par: 4, handicap: 12 },
      { number: 10, par: 4, handicap: 10 },
      { number: 11, par: 4, handicap: 6 },
      { number: 12, par: 4, handicap: 8 },
      { number: 13, par: 3, handicap: 18 },
      { number: 14, par: 4, handicap: 2 },
      { number: 15, par: 5, handicap: 4 },
      { number: 16, par: 4, handicap: 12 },
      { number: 17, par: 3, handicap: 16 },
      { number: 18, par: 4, handicap: 14 }
    ]
  }, {
    id: 5,
    courseName: 'TPC Scottsdale',
    city: 'Scottsdale',
    state: 'AZ',
    zip: '85260',
    holes: [
      { number: 1, par: 4, handicap: 14 },
      { number: 2, par: 4, handicap: 8 },
      { number: 3, par: 5, handicap: 4 },
      { number: 4, par: 3, handicap: 18 },
      { number: 5, par: 4, handicap: 6 },
      { number: 6, par: 4, handicap: 12 },
      { number: 7, par: 3, handicap: 16 },
      { number: 8, par: 4, handicap: 2 },
      { number: 9, par: 4, handicap: 10 },
      { number: 10, par: 4, handicap: 11 },
      { number: 11, par: 4, handicap: 1 },
      { number: 12, par: 3, handicap: 15 },
      { number: 13, par: 5, handicap: 5 },
      { number: 14, par: 4, handicap: 7 },
      { number: 15, par: 5, handicap: 9 },
      { number: 16, par: 3, handicap: 17 },
      { number: 17, par: 4, handicap: 13 },
      { number: 18, par: 4, handicap: 3 }
    ]
  }
]

const minScore = 2
const maxScore = 8

const dates = [
  '2019-09-01',
  '2019-09-02',
  '2019-09-03',
]

exports.seed = async (knex) => {
  return knex.transaction(async (trx) => {
    await trx('Players').insert(players)

    for (const ci in courses) {
      const course = courses[ci]
      await trx('Courses').insert({
        id: course.id,
        courseName: course.courseName,
        city: course.city,
        state: course.state,
        zip: course.zip,
      })

      for (const hi in course.holes) {
        const hole = course.holes[hi]
        await trx('CourseHoles').insert({
          courseId: course.id,
          number: hole.number,
          par: hole.par,
          handicap: hole.handicap
        })
      }
    }

    for (const i in dates) {
      const roundDate = dates[i]

      for (const pi in players) {
        const player = players[pi]

        for (const ci in courses) {
          const course = courses[ci]
          const round = await trx('Rounds').insert({ playerId: player.id, courseId: course.id, roundDate: roundDate })
          const id = round[0]
          const holes = []
          for (let n = 1; n <= 18; n++) {
            holes.push({
              roundId: id,
              number: n,
              score: Math.random() * (maxScore - minScore) + minScore
            })
          }

          await knex.batchInsert('RoundHoles', holes, 30).transacting(trx)
        }
      }
    }
  })
}
