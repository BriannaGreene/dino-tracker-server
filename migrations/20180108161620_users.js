exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments()
    table.varchar('first_name', 255)
    table.varchar('last_name', 255)
    table.varchar('user_name', 255)
    table.varchar('auth_client', 255)
    table.text('auth_profile')
    table.integer('avatar').notNullable().defaultTo(1)
    table.json('sticky')
    table.bool('admin').defaultTo(false)
    table.bool('manager').defaultTo(false)
    table.integer('group_id').references('id').inTable('groups').onDelete('cascade')
    table.json('team')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
