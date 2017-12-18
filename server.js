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

var db = require('./models');

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

app.get('/api/contacts', function(req, res) {
  db.Contact.find(function(err, contacts) {
    if (err) { return console.log("Index error:", err) };
    res.json(contacts);
  });
});

app.get('/api/contacts/:id', function(req, res) {
  db.Contact.findOne({ _id: req.params.id }, function(err, contact) {
    if (err) { return console.log("Index error:", err) };
    res.json(contact);
  });
});

app.post('/api/contacts', function(req, res) {
  var newContact = new db.Contact ({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    birthday: req.body.birthday
  });
  newContact.save(function(err, contact) {
    if (err) { return console.log("save error:", err) };
    res.json(contact);
  });
});

app.delete('api/contacts/:id', function(req, res) {
  let contactId = req.params.id;
  db.Contact.findOneAndRemove({ _id: contactId }, function(err, deletedContact) {
    if (err) {console.log("error", err)}
    res.json(deletedContact);
  });
});

/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    message: "Welcome to my personal api address book! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/contacts", description: "See all my contacts"}, // CHANGE ME
      {method: "POST", path: "/api/contacts", description: "Create a new contact"} // CHANGE ME
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
 app.listen(process.env.PORT || 3000)
