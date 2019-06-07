const router = require('express').Router();

const db = require('../../data/helpers/countriesDB');

router
      .get('/', (req, res) => {
            db.getCountries()
                  .then(countries => {
                        res.status(200).json(countries);
                  })
                  .catch(err => {
                        res.status(500).json({ error: 'could not get anything from the database' })
                  })
      })
      .post('/', (req, res) => {
            db.addCountry(req.body)
                  .then(country => {
                        res.status(201).json({ message: 'new country added'})
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'could not add to database' })
                  })
      })

router
      .get('/:id', (req, res) => {
            const id = req.params.id;
            db.getCountry(id)
                  .then(country => {
                  res.status(200).json(country);
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: "Couldn't get that country.." });
                  });
      })

module.exports = router;