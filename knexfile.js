'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/dino-tickets-dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/dino-tickets-test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
