const router = require('express').Router();
const db = require('../../data/configure.js');
// const db = require('../../data/helpers/countriesDB');

router
      .get('/', async (req, res) => {
            try {
                  const countries = await db('countries')
                  res.status(200).json(countries)
            } catch (error) {
                  console.log(error);
                  res.status(500).json({ error: 'could not get anything from the database' })
            }
      })
      .post("/", async (req, res) => {
            try {
                  const [id] = await db("countries").insert(req.body)
                        .where({ id })
                        .first();
                  res.status(201).json({ message: "Country added" });
            } catch (error) {
                  console.log(error);
                  res.status(500).json({ error: "Could not add country" });
            }
      });

router
      .get('/:id', async (req, res) => {
            try {
                  const country = await db('countries as c')
                        .select(
                              'c.id',
                              'c.country_name',
                              'c.country_description',
                              'c.country_visited'
                        )
                        .where({id: req.params.id})
                        .first()
                  const cities = await db('cities as cit')
                        .join('countries as c', 'c.id', 'cit.country_id')
                        .select('cit.city_name', 'cit.city_description', 'cit.city_visited')
                        .where('cit.country_id', req.params.id)
                  if(country) {
                        res.status(200).json({country, cities})
                  } else {
                        res.status(404).json({ error: 'that ID does not exist' })
                  }
            } catch (error) {
                  console.log(error)
                  res.status(500).json({ message: "Couldn't get that country.." });
            }      
      })

module.exports = router;