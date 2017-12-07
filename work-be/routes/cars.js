var express = require('express');
var router = express.Router();
var cars = require('../models/cars');


router.get('/', function (req, res, next) {
    cars.find()
        .exec(function (err, cars) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: cars
            });
        });
});




module.exports = router;