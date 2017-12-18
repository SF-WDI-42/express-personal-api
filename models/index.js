// require mongoose and connect to database
var mongoose = require("mongoose");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", {useMongoClient: true});

mongoose.Promise = global.Promise;  // use native Promise

var SkiRun = require('./skirun');

module.exports = {
  SkiRun: SkiRun
};
//could be written like: 
// module.exports.SkiRun = SkiRun;
