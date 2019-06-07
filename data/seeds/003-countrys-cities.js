
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {country_id: 1, city_id:3},
        {country_id: 1, city_id:4},
        {country_id: 1, city_id:5},
        {country_id: 1, city_id:6},
        {country_id: 2, city_id:1},
        {country_id: 2, city_id:8},
        {country_id: 4, city_id:2},
        {country_id: 4, city_id:12},
        {country_id: 5, city_id:9},
        {country_id: 6, city_id:11},
        {country_id: 10, city_id:13},
        {country_id: 12, city_id:10}
       
      ]);
    });
};
