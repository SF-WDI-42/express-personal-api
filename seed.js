// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })


var db = require("./models");



//Restaurant LIST VARIABLE
var sampleRestaurants = [{
  typeOfStyle: 'chinese',
  averagePrice: '$15/person',
  description: 'tasty and healthy',
}, {
  typeOfStyle: 'Italy',
  averagePrice: '$25/person',
  description: 'popular and delicious',
}, {
  typeOfStyle: 'French',
  averagePrice: '$28/person',
  description: 'classic',
}, {
  typeOfStyle: 'American',
  averagePrice: '$30/person',
  description: 'more creative',
}];

// creating albums with a "songs" key that contains an array of songs
db.Restaurant.remove({}, function(err, restaurants){
  console.log('removed all restaurants');

  albumsList.forEach(function (albumObj) {
    var album = new db.Album(albumObj);
    album.songs = songsList;
    album.save(function(err, savedAlbum){
      if (err) {
        console.log(err);
        return;
      }
      console.log('saved ', savedAlbum.name);
    });
  });
});