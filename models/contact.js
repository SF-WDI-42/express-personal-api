 var mongoose = require('mongoose'),
   Schema = mongoose.Schema;

 var ContactSchema = new Schema({
   name: String,
   phoneNumber: String,
   email: String,
   birthday: String
});

var Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
