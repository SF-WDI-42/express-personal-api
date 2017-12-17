// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/


// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my Patrick's Life! Feel Free to Take a Look!",
    documentationUrl: "https://github.com/pmxperiment/express-personal-api", // CHANGE ME
    baseUrl: "https://nameless-escarpment-44875.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "All About Me"}, // CHANGE ME
      {method: "GET", path: "/api/interests", description: "About my Interests"}, // CHANGE ME
      {method: "POST", path: "/api/interests", description: "Add new interest"},
      {method: "PUT", path: "/api/interest/:id", description: "Edit current interest"}, // CHANGE ME
      {method: "DELETE", path: "/api/interest/:id", description: "Delete an interest"}, // CHANGE ME
    ]
  })
});

app.get('/api/profile', function profileIndex(req, res) {
  res.json({
    name: "Patrick Orara",
    githubUsername: "pmxperiment",
    githubLink: "https://github.com/pmxperiment/express-personal-api",
    githubProfileImage: "",
    personalSiteLin: "",
    currentCity: "San Francisco",
    hobbies: [
      {name: "videography", type: "Biography", description: ""},
      {name: "travel", type: "Sport", description: ""}
    ]
  })
});









/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
