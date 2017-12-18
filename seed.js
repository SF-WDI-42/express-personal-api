// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
var db = require('./models');

var skiRuns = [{
  resort: "Heavenly",
  skiTrail: "Stagecoarch",
  runRating: "5-stars",
  skierAbility: "Advanced",
  runCondition: "fresh pow pow"
},
{
  resort: "Northstar",
  skiTrail: "Some run",
  runRating: "5-stars",
  skierAbility: "Advanced",
  runCondition: "freshy"
},
{
  resort: "Kirkwood",
  skiTrail: "Another run",
  runRating: "3-stars",
  skierAbility: "Beginner",
  runCondition: "Crunchy"
}
];


db.SkiRun.remove({}, function(err, skiruns){
  // code in here runs after all ski runs are removed
  db.SkiRun.create(skiRuns, function(err, skiruns){
    // code in here runs after all ski runs are created
    if (err) { return console.log('ERROR', err); }
    console.log("all ski runs:", skiruns);
    console.log("created", skiruns.length, "ski runs");
    process.exit();
  });
});
