// require mongoose
// set up shorthand Schema variable to stand in for mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// SkiRun schema
var SkiRunSchema = new Schema({
  resort: String,
  skiTrail: String,
  runRating: String,
  skierAbility: String,
  runCondition: String
});

// SkiRun model
var SkiRun = mongoose.model('SkiRun', SkiRunSchema);

module.exports = SkiRun;