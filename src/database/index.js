const database = require('./config')

let _connection

const connect = () => {
  return require('knex')({
    ...database,
    pool: {
      min: 2,
      max: 10
    }
  })
}

const connection = () => {
  if (!_connection) {
    _connection = connect()
  }

  return _connection
}

module.exports = connection()
