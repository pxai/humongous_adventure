/**
 * place.js
 * Model file for the place
 * https://github.com/pello-io/simple-express-mongoose
 * Pello Altadill - http://pello.info
 */
var mongoose = require('mongoose');

// define the schema
var schema = mongoose.Schema({
    name: { type: String, trim: true },
    description: { type: String, trim: true },
    next: { type: String, trim: true },
    nort: { type: String, trim: true },
    south: { type: String, trim: true },
    west: { type: String, trim: true },
    east: { type: String, trim: true },
    up: { type: String, trim: true },
    down: { type: String, trim: true }
  })


// compile the model
var Place = mongoose.model('Place', schema,'places');

module.exports = Place;
