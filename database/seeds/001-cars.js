
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Cars').truncate()
    .then(function () {
      // Inserts seed entries
      const cars = [
        {
          VIN: '393HN023EIL093VLW',
          Make: 'Chevrolet',
          Model: 'Cruze',
          Mileage: 52000,
          Transmission: 'automatic',
          TitleStatus: 'lien'
        },
        {
          VIN: '861IX476LX119JE68R',
          Make: 'Ford',
          Model: 'Fiesta',
          Mileage: 35869,
          Transmission: 'automatic',
          TitleStatus: 'clean'
        },
        {
          VIN: '194DFA257FDA1897E',
          Make: 'Dodge',
          Model: 'Caliber',
          Mileage: 63500,
          Transmission: 'manual',
          TitleStatus: 'salvage'
        }
      ]
      return knex('Cars').insert(cars);
    });
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