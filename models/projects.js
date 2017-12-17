var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProjectsSchema = new Schema({
     _id: Number,
     name: String,
     description: String,
     githubRepoUrl: String, // url()
     deployedUrl: String, // url()
     screenshot: String // url()
});

var Projects = mongoose.model('Projects', ProjectsSchema);

module.exports = Projects;
