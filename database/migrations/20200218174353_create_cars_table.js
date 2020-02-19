
exports.up = function(knex) {
  return knex.schema.createTable('Cars', tbl => {
    tbl.increments();
    tbl.string('VIN', 20).notNullable().unique();
    tbl.string('Make', 150).notNullable();
    tbl.string('Model', 150).notNullable();
    tbl.integer('Mileage', 10).notNullable();
    tbl.string('Transmission', 150);
    tbl.string('TitleStatus', 150);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Cars');
};