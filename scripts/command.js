require('dotenv').config()
const { spawnSync} = require('child_process')
const args = process.argv

let command = null

// Set the command argument
if (Array.isArray(args) && args.length >= 2) {
  command = args[2].toString().toLowerCase()
}

// If no command was given then we should throw an error
if (!command) throw new Error('The command was not recognized')

if (command === 'db:admin') {

  // Execute the db:admin command
  const { DB_ADMIN_PORT } = process.env
  spawnSync('open', [`http://127.0.0.1:${DB_ADMIN_PORT}`]);

} else if (command === 'playground') {

  // Execute the playground command
  const { PORT } = process.env
  spawnSync('open', [`http://127.0.0.1:${PORT}/playground`]);

}
