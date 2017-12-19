function index(req, res) {
  res.json({
    message: "Welcome to Adam's personal api!",
    documentation_url: 'https://github.com/AdamMenard/express-personal-api',
    base_url: 'localhost:3000',
    endpoints: [
      {method: 'GET',
      path: '/api',
      description: 'Describes available endpoints'},

      {method: "GET",
       path: "/api/profile",
       description: "Information about Adam",
       githubUserName: String,
       githubLink: String,
       guthubProfileImage: String,
       personalSiteLink: String,
       currentCity: "San Francisco",
       pets: [
         {name: "Molly",
          type: "Dog",
          breed: "Pom-Chi"}]
        }, // CHANGE ME - done

      {method: "POST",
       path: "/api/hobbies",
       description: "Creates a new hobby for Adam"}, // CHANGE ME - done

      {method: "POST",
       path: "/api/projects",
       description: "Adds one of Adam's very interesting projects"},

       {method: "GET",
        path: "/api/controllers",
        description: "Controllers for database"}
    ]
  });
}

module.exports = {
  index: index
}
