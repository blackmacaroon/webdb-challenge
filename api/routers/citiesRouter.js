const router = require('express').Router();

const db = require('../../data/helpers/citiesDB');

router
      .get('/', (req, res) => {
            db.getCities()
                  .then(cities => {
                        res.status(200).json(cities);
                  })
                  .catch(err => {
                        res.status(500).json({ error: 'could not get anything from the database' })
                  })
      })
      .post('/', (req, res) => {
            db.addCity(req.body)
                  .then(city => {
                        res.status(201).json({ message: 'new city added'})
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'could not add to database' })
                  })
      })

router
      .get('/:id', (req, res) => {
            const id = req.params.id;
            db.getCity(id)
                  .then(city => {
                  res.status(200).json(city);
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: "Couldn't get that city.." });
                  });
      })

module.exports = router;