var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    vin: {type: String, required: true},
    year: {type: Number, required: true},
    brand: {type: String, required: true},
    color: {type: String, required: true}
    
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('cars', schema);