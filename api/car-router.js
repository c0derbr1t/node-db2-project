const express = require('express');

const db = require('../database/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    // list of cars
    db.select('*').from('Cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Request failed - could not retreive the list of cars!',
                error: err
            });
        });
});

router.get('/:id', (req, res) => {
    // car by id
    const id = req.params.id;
    db('Cars')
        .where({ id: id })
        .then(car => {
            res.status(200).json(car[0]);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Request failed - could not retreive the specified car!',
                error: err
            });
        });
});

router.post('/', (req, res) => {
    // add a car
    const carInfo = req.body;
    db('Cars')
        .insert(carInfo, 'id')
        .then(count => {
            res.status(201).json(req.body)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Request failed - could not add the new car!',
                error: err
            });
        });
});

router.put('/:id', (req, res) => {
    // edit a car
    const id = req.params.id;
    const changes = req.body;
    db('Cars')
        .where({ id: id })
        .update(changes)
        .then(count => {
            res.status(200).json(req.body)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Request failed - could not update the specified car!',
                error: err
            });
        });
});

router.delete('/:id', (req, res) => {
    // delete a car
    const id = req.params.id;
    db('Cars')
        .where({ id: id })
        .del()
        .then(count => {
            res.status(200).json({
                message: 'Car Deleted!'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Request failed - could not delete the specified car!',
                error: err
            });
        });
});

module.exports = router;