
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


/*
The client for this API is a car dealer who has provided the following specs:

The critical information for each car is the 
    VIN, 
    make, 
    model, and 
    mileage.
They also track 
    transmission type and 
    status of the title (clean, salvage, etc.), but this information is not always immediately known.
*/