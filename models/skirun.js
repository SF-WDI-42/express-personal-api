// require mongoose
// set up shorthand Schema variable to stand in for mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// skiRunReview schema
var SkiRunSchema = new Schema({
  resort: String,
  skiTrail: String,
  runRating: String,
  skierAbility: String,
  runCondition: String
});

// skiRun model
var SkiRun = mongoose.model('SkiRun', SkiRunSchema);

module.exports = SkiRun;