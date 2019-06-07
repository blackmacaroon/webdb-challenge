
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        {country_id: 2, city_name: 'Geneva', city_description: 'great'},                 //1
        {country_id: 4, city_name: 'Reykjavic', city_description: 'great'},              //2
        {country_id: 1, city_name: 'Milan', city_description: 'great'},                  //3
        {country_id: 1, city_name: 'Venice', city_description: 'great'},                 //4
        {country_id: 1, city_name: 'Genoa', city_description: 'great'},                  //5
        {country_id: 1, city_name: 'Florence', city_description: 'great'},               //6
        {country_id: 1, city_name: 'Rome', city_description: 'great'},                   //7
        {country_id: 2, city_name: 'Zurich', city_description: 'great'},                 //8
        {country_id: 5, city_name: 'Stockholm', city_description: 'great'},              //9
        {country_id: 12, city_name: 'Helsinki', city_description: 'great'},              //10
        {country_id: 6, city_name: 'Innsbruck', city_description: 'great'},             //11
        {country_id: 4, city_name: 'Keflavík', city_description: 'great'},               //12
        {country_id: 10, city_name: "San Juan de la Maguana", city_description: 'great'} //13
     
      ]);
    });
};
