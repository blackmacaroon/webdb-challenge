const db = require('../configure.js');


module.exports = {
      getCountries,
      addCountry,
      getCountry
      
};

function getCountries() {
      return db('countries');
}

function addCountry(country) {
      return db('countries')
      .insert(country)
      .then(ids => ids[0]);
      
}

function getCountry(id) {
      return db('countries')
      .where({ id })
      .first();
}
