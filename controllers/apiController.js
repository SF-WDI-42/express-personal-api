function index(req, res) {
  res.json({
    message: "Welcome to Adam's personal api!",
    documentation_url: 'https://github.com/AdamMenard/express-personal-api',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}

module.exports = {
  index: index
}
