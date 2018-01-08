exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments()
    table.varchar('first_name', 255)
    table.varchar('last_name', 255)
    table.varchar('user_name', 255).notNullable()
    table.text('password').notNullable()
    table.bool('admin').defaultTo(false)
    table.bool('manager').defaultTo(false)
    table.integer('group_id').notNullable().references('id').inTable('groups').onDelete('cascade')
    table.json('team')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
