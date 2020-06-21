const express = require('express');

const CarRouter = require('./api/car-router.js');

const server = express();

server.use(express.json());

server.use('/api/cars', CarRouter);

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the Car Dealer</h1>');
});

module.exports = server;