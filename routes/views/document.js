var keystone = require('keystone');

exports = module.exports = function (req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'document';
	
	// get document
	keystone.list('Document').model.findOne({ 'path': req.url.substring(1) })
		.exec(function(err, post) {
	    if (err) return res.err(err);
	    // if path in mongoDB is found
	    if (post) {
	    	view.query('document', keystone.list('Document').model.findOne({ 'path': req.url.substring(1) }));
		
				if (req.isMobile) {
					locals.mobile = "true";
				} else {
					locals.mobile = "false";
				}
				
				view.render('document');
	    } 
	  	// if no such path in mongoDB
	    else {
	    	view.query('tiles', keystone.list('Tile').model.find().sort('sortOrder'));
		
				if (req.isMobile) {
					locals.mobile = 'true';
					locals.colwidth = 'col-xs-12';
				} else {
					locals.mobile = 'false';
					locals.colwidth = 'col-xs-6';
				}
		
				view.render('index');
	    }
	  });
};
