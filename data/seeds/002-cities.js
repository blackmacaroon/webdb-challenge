
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        {city_name: 'Geneva', city_description: 'great'},        //1
        {city_name: 'Reykjavic', city_description: 'great'},     //2
        {city_name: 'Milan', city_description: 'great'},         //3
        {city_name: 'Venice', city_description: 'great'},        //4
        {city_name: 'Genoa', city_description: 'great'},         //5
        {city_name: 'Florence', city_description: 'great'},      //6
        {city_name: 'Rome', city_description: 'great'},          //7
        {city_name: 'Zurich', city_description: 'great'},        //8
        {city_name: 'Stockholm', city_description: 'great'},     //9
        {city_name: 'Helsinki', city_description: 'great'},     //10
        {city_name: 'Innsbruck', city_description: 'great'},    //11
        {city_name: 'Keflavík', city_description: 'great'}      //12
     
      ]);
    });
};
