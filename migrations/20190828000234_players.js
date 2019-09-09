
exports.up = (knex) => {
  return knex.schema
    .createTable('Players', function (table) {
      table.increments('id')
      table.string('playerName', 255).notNullable()
    })
    .createTable('Courses', function (table) {
      table.increments('id')
      table.string('courseName', 255).notNullable()
      table.string('city', 255).notNullable()
      table.string('state', 255).notNullable()
      table.string('zip', 255).notNullable()
    })
    .createTable('CourseHoles', function (table) {
      table.increments('id')
      table.integer('courseId', 255).unsigned().notNullable()
      table.integer('number').notNullable()
      table.integer('par').notNullable()
      table.integer('handicap').notNullable()
      table.foreign('courseId').references('Courses.id')
    })
    .createTable('Rounds', function (table) {
      table.increments('id')
      table.integer('playerId', 255).unsigned().notNullable()
      table.integer('courseId', 255).unsigned().notNullable()
      table.date('roundDate').notNullable()
      table.foreign('playerId').references('Players.id')
      table.foreign('courseId').references('Courses.id')
    })
    .createTable('RoundHoles', function (table) {
      table.increments('id')
      table.integer('roundId', 255).unsigned().notNullable()
      table.integer('number', 255).notNullable()
      table.integer('score').notNullable()
      table.foreign('roundId').references('Rounds.id')
    })
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('RoundHoles')
    .dropTableIfExists('Rounds')
    .dropTableIfExists('CourseHoles')
    .dropTableIfExists('Courses')
    .dropTableIfExists('Players')
}
