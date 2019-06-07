
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        {country_name: 'Italy', country_description: 'great'},                                           //1
        {country_name: 'Switzerland', country_description: 'great'},                                     //2
        {country_name: 'France', country_description: 'great'},                                          //3
        {country_name: 'Iceland', country_description: 'great'},                                         //4
        {country_name: 'Sweden', country_description: 'great'},                                          //5
        {country_name: 'Austria', country_description: 'great'},                                         //6
        {country_name: 'Bulgaria', country_description: 'great'},                                        //7
        {country_name: 'Canada', country_description: 'great'},                                          //8
        {country_name: 'Mexico', country_description: 'great'},                                          //9
        {country_name: 'Dominican Republic', country_description: 'great'},                             //10
        {country_name: 'Haiti', country_description: 'great'},                                          //11
        {country_name: 'Finland', country_description: 'great'}                                         //12
       
      ]);
    });
};
