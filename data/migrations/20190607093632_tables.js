
exports.up = function(knex, Promise) {
      return knex.schema
            .createTable('countries', tbl => {
                  tbl 
                  .increments();
                  tbl
                  .string('country-name', 60)
                  .notNullable()
                  .unique()
                  tbl
                  .text('country-description')
                  .notNullable()
                  tbl
                  .boolean('country-visited')
            })
            .createTable('cities', tbl => {
                  tbl
                  .increments();
                  tbl
                  .string('city-name', 60)
                  .notNullable()
                  .unique()
                  tbl
                  .text('city-description')
                  .notNullable()
                  tbl
                  .boolean('city-visited')
            })
            .createTable('countrys-cities', tbl => {
                  tbl
                  .increments()
                  tbl
                  .integer('country-id')
                  .notNullable()
                  .references('id')
                  .inTable('countries')
                  .onDelete('RESTRICT')
                  .onUpdate('CASCADE')
                  tbl
                  .integer('city-id')
                  .notNullable()
                  .references('id')
                  .inTable('cities')
                  .onDelete('RESTRICT')
                  .onUpdate('CASCADE')
            })
  
};

exports.down = function(knex, Promise) {
      return knex.schema
            .dropTableIfExists('cities')
            .dropTableIfExists('countries')
            .dropTableIfExists('countrys-cities')
};
