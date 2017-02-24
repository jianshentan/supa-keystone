var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Document = new keystone.List('Document', {
	autokey: { path: 'slug', from: 'title', unique: true },
	sortable: true,	
	singular: 'Document', 
	plural: 'Documents'
});

Document.add(
	"Document", 
	{
		title: { type: Types.Text, required: true, initial: true },
		path: { type: Types.Text, required: true, initial: true, label: "Path (eg 'privacy-policy')" },
		content: { type: Types.Html, wysiwyg: true }
	}
);


/**
 * Registration
 */
Document.defaultColumns = 'title';
Document.register();
