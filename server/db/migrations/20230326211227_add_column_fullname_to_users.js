exports.up = function(knex) {
  return knex.schema.table('users', table => {
    table.string('full_name', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', table => {
    table.dropColumn('full_name');
  })
};