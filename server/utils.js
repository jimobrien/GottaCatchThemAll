
/*****************
 * MongoDB Database
 * Implemented with Monk - https://github.com/LearnBoost/monk
 * Run with nodemon by running 'nodemon server.js' from this folder.
 ****************/
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/catchem'); // TODO: update host and database name
// var users = db.get('users');

// Examples
var users = db.get('users');
users.index('name last'); // get users collection ==> users.insert(), users.update(), etc.
// db.close();


module.exports = db; // export db instance