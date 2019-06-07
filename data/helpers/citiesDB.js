const db = require('../configure.js');


module.exports = {
      getCities,
      addCity,
      getCity
      
};

function getCities() {
      return db('cities');
}

function addCity(city) {
      return db('cities')
      .insert(city)
      .then(ids => ids[0]);
      
}

function getCity(id) {
      return db('cities')
      .where({ id })
      .first();
}
