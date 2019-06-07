const router = require('express').Router();
const db = require('../../data/configure.js');
// const db = require('../../data/helpers/citiesDB');

router
      .get('/', async (req, res) => {
            try {
                  const cities = await db('cities')
                  res.status(200).json(cities)
            } catch (error) {
                  console.log(error);
                  res.status(500).json({ error: 'could not get anything from the database' })
            }
      })
      .post("/", async (req, res) => {
            try {
                  const [id] = await db("cities").insert(req.body)
                        .where({ id })
                        .first();
                  res.status(201).json({ message: "City added" });
            } catch (error) {
                  console.log(error);
                  res.status(500).json({ error: "Could not add city" });
            }
          });

router
      .get('/:id', async (req, res) => {
            try {
                  const city = await db('cities as c')
                        .select(
                              'c.city_name',
                              'c.city_description',
                              'c.city_visited'
                        )
                        .where({ id: req.params.id})
                        .first()
                  if(city) {
                        res.status(200).json(city)
                  } else {
                        console.log(error)
                        res.status(404).json({ error: 'that ID does not exist' })
                  }
            } catch (error) {
                  console.log(error)
                  res.status(500).json({ message: "Couldn't get that city.." });
            }      
      })

module.exports = router;