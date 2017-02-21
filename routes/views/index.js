var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	
	// Load Tiles by sort-order
	view.query('tiles', keystone.list('Tile').model.find().sort('sortOrder'));

	// Render the view
	view.render('index');
};
