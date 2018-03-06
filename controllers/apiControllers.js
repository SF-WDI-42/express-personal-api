function index(req, res) {
	res.json({
		message: 'Welcome to Marvel characters',
		documentation_url: 'https://github.com/SherifIsmail01/express-personal-api',
		base_url: 'localhost:3000',
		endpoints: [
			{
				method: 'GET', path: '/api', description: 'describes all available endpoints'
			},
			{   
				method: 'GET', path: '/api/characters', description: 'send back all characters as json'
			},
			{	
				method: 'POST', path: '/api/characters', description: 'create new characters based on request body and send it back as json'
			},
			{	
				method: 'PUT', path: '/api/characters/:charactersId', description: 'find one character by id based on request body and send it back as json'
			},
			{	
				method:	'DELETE', path: '/api/characters/:charactersId', description: 'delete one character and send it back as json'
			}
		]
	});
}


module.exports = {
	index: index

}