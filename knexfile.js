require('dotenv').config()
const database = require('./src/database/config')

module.exports = {
  ...database,
  migrations: {
    directory: `${__dirname}/migrations`,
    tableName: '_migrations'
  }
}
