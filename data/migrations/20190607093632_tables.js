
exports.up = function(knex, Promise) {
      return knex.schema
            .createTable('countries', tbl => {
                  tbl 
                  .increments();
                  tbl
                  .string('country_name', 60)
                  .notNullable()
                  .unique()
                  tbl
                  .text('country_description')
                  .notNullable()
                  tbl
                  .boolean('country_visited')
            })
            .createTable('cities', tbl => {
                  tbl
                  .increments();
                  tbl
                  .string('city_name', 60)
                  .notNullable()
                  .unique()
                  tbl
                  .text('city_description')
                  .notNullable()
                  tbl
                  .boolean('city_visited')
                  tbl
                  .integer('country_id')
                  .unsigned()
                  .references('id')
                  .inTable('countries')
                  .onDelete('RESTRICT')
                  .onUpdate('CASCADE')
            })
            // .createTable('countrys-cities', tbl => {
            //       tbl
            //       .increments()
            //       tbl
            //       .integer('country_id')
            //       .notNullable()
            //       .references('id')
            //       .inTable('countries')
            //       .onDelete('RESTRICT')
            //       .onUpdate('CASCADE')
            //       tbl
            //       .integer('city_id')
            //       .notNullable()
            //       .references('id')
            //       .inTable('cities')
            //       .onDelete('RESTRICT')
            //       .onUpdate('CASCADE')
            // })
  
}; 

exports.down = function(knex, Promise) {
      return knex.schema
            .dropTableIfExists('cities')
            .dropTableIfExists('countries')
            // .dropTableIfExists('countrys-cities')
};
