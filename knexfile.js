'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/nimble-dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/nimble-test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
