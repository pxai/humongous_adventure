/**
 * models/index.js
 * All models are here to import all of them just with one command
 * in the main app.js, and by the way we connect to MongoDB
 * Pello Altadill - http://pello.io
 */
var mongoose = require('mongoose');
var config = require('config');

mongoose.connect('mongodb://'+config.db.host+'/'+config.db.dbname);

// optionally:
//mongoose.set('debug', true);

exports.Place = require('./place');
