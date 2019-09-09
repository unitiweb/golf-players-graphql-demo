
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

const {
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_NAME,
  NODE_ENV
} = process.env

if (!DB_HOST || !DB_USER || !DB_PASS || !DB_NAME) {
  throw new Error(
    'Environment variables DB_HOST, DB_USER, DB_PASS, and DB_NAME ' +
    'must be set to migrate database.'
  )
}

const config = {
  development: {
    client: 'mysql',
    connection: {
      host : DB_HOST,
      user : DB_USER,
      password : DB_PASS,
      database : DB_NAME
    }
  },
  testing: {
    client: 'sqlite',
    connection: ':memory:',
    useNullAsDefault: true
  },
  production: {
    client: 'mysql',
    connection: {
      host : DB_HOST,
      user : DB_USER,
      password : DB_PASS,
      database : DB_NAME
    }
  }
}

module.exports = config[NODE_ENV]
