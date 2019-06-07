const db = require('../configure.js');


module.exports = {
      getCountries,
      getOnlyCountry,
      addCountry,
      getCountry
      
};

function getCountries() {
      return db('countries');
}

function getOnlyCountry() {
      return db('countries')
      .where({ id })
      .first();  
}


function addCountry(country) {
      return db('countries')
      .insert(country)
      .then(ids => ids[0]);
      
}

function getCountry(id) {
      return db
            .select(
                  'country_name',
                  'country_description',
                  'country_visited',
                  'city_name',
                  'city_description',
                  'city_visited'
            )
            .from('countrys-cities')  // um..
            // .innerJoin('countries').on('country_id', '=', 'countries.id')
            // .innerJoin('cities').on('cities_id', '=', 'cities.id')
            .innerJoin('countries', function() {this.on('country_id', '=', 'countries.id')})
            .innerJoin('cities', function() {this.on('cities_id', '=', 'cities.id')})     
            .where({'countrys-cities.country_id': id })
      
}
