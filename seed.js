// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_hobby = {description: "Sharp rocks. Middle of nowhere."}

db.Hobby.create(new_hobby, function(err, hobby){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new hobby", hobby._id)
  process.exit(); // we're all done! Exit the program.
})
