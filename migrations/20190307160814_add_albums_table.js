
exports.up = function(knex, Promise) {
  return knex.schema.createTable("albums", table => {
      table.increments();
      table.string("name", 55).notNullable().unique();
      table.integer("release_year");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("albums");
};
