var mongoose = require("mongoose");
var express = require('express');

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", {useMongoClient: true});

mongoose.Promise = global.Promise;  // use native Promise

module.exports.Hobby = require("./hobby.js.example"); // example
