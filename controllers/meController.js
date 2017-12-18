var db = require('../models');

function index(req, res){
  db.Me.find({}, fucntion(err, me){
    res.json(me);
  });
}


function create(req, res) {
  //make new
}

//get me allow
function show(req,res) {
  //find one fact by id and send to json
}

//delete
function destroy(req, res) {
  //delete
}

//PUT OR PATCH
function update(req, res) {
  //update
}

module.exports = {
index: index,
create: create,
show: show,
destroy: destroy,
update: update
});
