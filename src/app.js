/**
* humongous adventure
*
*/
var colors = require('colors');
var prompt = require('prompt');
var config = require('config');
var mongoose = require('mongoose');

var models = require('./models');
var adventurer;

console.log('Welcome to...');
console.log('Humongous Adventure'.rainbow );
console.log(config.general.version);



prompt.start();
prompt.get(['name'], function (err, result) {
 if (err) { return onErr(err); }
 if (result.name) {
   config.general.adventurer = result.name;
 }
 console.log('Welcome ' + config.general.adventurer);
 crawl();
});

function crawl (where) {
  models.Place.findOne({name:where},function(err, place) {
    if (place) {
      console.log('Now you are in...'.green);
      console.log(place.name.bold);
      console.log(place.description.gray);
    } else {
      console.log('Nothing found'.red);
    }

    prompt.get(['where'], function (err, result) {
     if (err) { return onErr(err); }
     if (result.where) {
       crawl(result.where);
     }
    });

  });
}
