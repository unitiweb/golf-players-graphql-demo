/**
 * Get and retuern the health check message
 *
 * @return Message
 */
module.exports = () => {
  return {
    code: 'HealthCheck',
    message: 'The graphql service is running and healthy'
  }
}
