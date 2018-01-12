exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(table) {
    table.increments()
    table.text('note', 255).notNullable()
    table.integer('user_id')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes')
}
