var indexController = {
	index: function(req, res) {

		// Render the index.jade template from the 'views' directory
			res.render('index', {}) // Can pass in an argument

		// Send something to the app/browser. Numbers appear as status codes.
		// res.send(302)
		// res.send('The server is working.')

		// Send a JSON object
		// res.send({
		// 	name: 'Jamie',
		// 	occupation: 'Badass'
		// })
		
	}
};

module.exports = indexController;