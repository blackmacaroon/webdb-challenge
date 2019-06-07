const express = require('express');

const server = express();

const countryRouter = require('./routers/countriesRouter');
const cityRouter = require('./routers/citiesRouter');

server.use(express.json());

server.use('/api/countries', countryRouter);
server.use('/api/cities', cityRouter);

// sanity check route 
server.get('/', (req, res) => {
      res.send(`<h2>nailed it!</h2>`)
      .catch(err => {
            console.log(`\nERROR`, err);
            res.status(500).json({ error: "i cant. even."})
      })
    });

module.exports = server;