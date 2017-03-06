var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	
	// Load Tiles by sort-order
	view.query('tiles', keystone.list('Tile').model.find().sort('sortOrder'));
	
	if (req.isMobile) {
		locals.mobile = 'true';
		locals.colwidth = 'col-xs-12';
	} else {
		locals.mobile = 'false';
		locals.colwidth = 'col-xs-6';
	}

	view.render('index');
};
