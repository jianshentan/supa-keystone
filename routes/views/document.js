var keystone = require('keystone');

exports = module.exports = function (req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'document';
	
	// Load document 
	view.query('document', keystone.list('Document').model.findOne({ 'path': req.url.substring(1) }));

	// Render the view
	view.render('document');
};
