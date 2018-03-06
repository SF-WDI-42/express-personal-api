var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CharacterSchema = new Schema({
	name: String,
	abilities: [String],
	image: String
});

var Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;