var db = require('../models');


function index(req, res) {
	db.Character.find(function(err, allCharacters){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
		res.json(allCharacters);
	});
}


function create(req, res) {
  var newCharacter = new db.Character({
    name: req.body.name,
    abilities: req.body.abilities,
    image: req.body.image
  });
  newCharacter.save(function (err, newCharacterInDb) {
    res.json(newCharacterInDb);
  });
}

// GET /api/characters/:characterId
function show(req, res) {
  // find one character by id and send it back as JSON
}

// DELETE /api/characters/:characterId
function destroy(req, res) {
  // find one character by id, delete it, and send it back as JSON
  var characterId = req.params.id;
  db.Character.findByIdAndRemove(characterId, function(err, deletedCharacter) {
    res.json(deletedCharacter);
  });
}

// PUT or PATCH /api/character/:characterId
function update(req, res) {
  // find one character by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};



