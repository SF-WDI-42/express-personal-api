// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_contacts = [{
      name: "Jane Smith",
      phoneNumber: "555-333-6666",
      email: "jane@mail.com",
      birthday: "Jan 3, 1995"
    }, {
      name: "John Smith",
      phoneNumber: "785-303-1122",
      email: "john@mail.com",
      birthday: "Feb 13, 1990"
    }, {
      name: "Mary Smith",
      phoneNumber: "333-678-1234",
      email: "mary@mail.com",
      birthday: "Apr 26, 2005"
    }, {
      name: "Daniel Doe",
      phoneNumber: "456-123-6666",
      email: "dan@mail.com",
      birthday: "Oct 17, 1985"
    }, {
      name: "Anna Jones",
      phoneNumber: "661-222-9966",
      email: "jane@mail.com",
      birthday: "Jul 4, 1975"
    }, {
      name: "William Jones",
      phoneNumber: "444-126-0066",
      email: "will@mail.com",
      birthday: "Nov 12, 1970"
    }];

db.Contact.remove({}, function(err, contacts) {
  if(err) {
    console.log("error occurred", err);
  } else {
    console.log("removed all contacts");
  };
    db.Contact.create(new_contacts, function(err, contacts){
      if (err) {
        return console.log("Error:", err);
      }
      console.log(contacts);
      console.log("Created " + contacts.length + " contacts" );
      process.exit(); // we're all done! Exit the program.
    });
});
