var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 // me schema
 var Me = new Schema({
   myName: String,
   cityLived: String,
   datesLivedInCity: Date,
   hobbies: [ String ],
   travels: [ String ]
 });

var Me = mongoose.model('Me', MeSchema);

module.export = Me;
