// SERVER-SIDE JAVASCRIPT

// require Express, create an Express app
var express = require('express'),
    bodyParser = require('body-parser'),
    // controllers = require('./controllers'),
    db = require('./models');

// generate a new express app and call it 'app'
var app = express();

// serve the public directory as a static file directory
app.use(express.static('public'));

// add the body-parser middleware to the server
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**********
 * ROUTES *
 **********/


/*
 * HTML Endpoints
 */
// provided endpoint
// app.get('/', function homepage (req, res) {
//   res.sendFile(__dirname + '/views/index.html');
// });

// endpoint used in Ski-Me
app.get('/', function homepage (req, res) {
  res.sendFile('views/index.html', { root : __dirname });
});

// get all ski runs
app.get('/api/skiruns', function index(req, res) {
  db.SkiRun.find({}, function(err, data) {
    if (err) {
      console.log(err)
    }
    res.json(data);
  })
});

// // get one ski run
app.get('/api/skiruns/:id', function show(req, res) {
  db.SkiRun.find({_id: req.params.id}, function(err, data) {
    res.json(data);
  });
});

// create new ski run
// app.post('/api/skiruns', function create(req, res) {
//   console.log(req.body);
//   db.SkiRun.create(req.body, function(err, data) {
//     res.json(data);
//   })


// });



app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false,
    message: "Welcome to SkiMe!",
    documentationUrl: "https://github.com/kjkeaston/express-personal-api",
    baseUrl: "localhost:3000", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/skiruns", description: "json of ski runs"},
      {method: "POST", path: "/api/skiruns", description: "Add a new ski run"}
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
