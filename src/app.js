/**
* humongous adventure
*
*/
colors = require('colors');
prompt = require('prompt');
config = require('config');

console.log('Welcome to...');
console.log('Humongous Adventure'.rainbow );
console.log(config.general.version);



prompt.start();
prompt.get(['name'], function (err, result) {
 if (err) { return onErr(err); }
 console.log('Welcome ' + result.name);
});
