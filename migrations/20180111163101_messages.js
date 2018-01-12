exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(table) {
    table.increments()
    table.integer('user_id')
    table.text('message')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('messages')
}
