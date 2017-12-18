var db = require('../models');

// GET /api/projects
function index(req, res) {
  // access database and pull out all projects
  db.Album.find({}, function(err, allAlbums) {
    res.json(allProjects);
  });
}

// POST /api/projects
function create(req, res) {
  // create an project based on request body and send it back as JSON
  db.Album.create(req.body, function(err, project) {
    if (err) { console.log('error', err); }
    res.json(project);
  });
}

// GET /api/projects/:projectId
function show(req, res) {
  // find one project by id and send it back as JSON
  db.Album.findById(req.params.projectId, function(err, foundAlbum) {
    res.json(foundAlbum);
  });
}

// DELETE /api/projects/:projectId
function destroy(req, res) {
  // find one project by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/projects/:projectId
function update(req, res) {
  // find one project by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
