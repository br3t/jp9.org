exports.up = function(knex) {
  return knex.schema
    .createTable('websites', function (table) {
      table.increments('id');
      table.string('domain_name', 255).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("websites")
};
