const knex = require('knex');

const configure = require('../knexfile.js');

module.exports = knex(configure.development);