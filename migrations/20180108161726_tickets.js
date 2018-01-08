exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', function(table) {
    table.increments()
    table.text('title').notNullable()
    table.text('description')
    table.varchar('status', 255).notNullable().defaultTo('to do')
    table.json('labels')
    table.varchar('team', 255).notNullable()
    table.json('assignees')
    table.integer('priority')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tickets')
}
