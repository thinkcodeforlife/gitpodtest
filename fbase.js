var process = require('process');
require('dotenv').config();

var firebase = require('firebase/app');
require('firebase/database');

console.log(`Your env is ${process.env.apiKey}`);

var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
}

// console.log(`Your databaseURL is ${firebaseConfig.databaseURL}`);


// Start firebase here!
var app = firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// Get a reference to the root of the Database
var rootRef = firebase.database().ref();

var val = rootRef.once('value').then(function (snapshot) {
    var my_val = snapshot.val();
})

// export module here!
module.exports = my_val;
