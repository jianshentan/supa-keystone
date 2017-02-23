var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User');
var Faq = new keystone.List('Faq', {
	autokey: { path: 'slug', from: 'title', unique: true },
	sortable: true,	
	singular: 'FAQ', 
	plural: 'FAQs'
});

// guide: https://github.com/keystonejs/keystone/tree/master/lib/storage
var localStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads',
		publicPath: '/uploads'
		//generateFilename: keystoneStorageNameFunctions.originalFilename
	}
})

Faq.add(
	"FAQ", 
	{
		title: { type: Types.Text, required: true, initial: true },
		subTitle: { type: Types.Text },
		question1: { 
			type: Types.Boolean, 
			label: "Enable Question 1", 
			default: true 
		}
	},
	{ heading: "Question 1", dependsOn: { question1: true } },
	{
		title1: {
			dependsOn: { question1: true },
			label: "Question Title",
			type: Types.Text
		},
		answerImage1: {
			dependsOn: { question1: true },
			label: "Answer Image",
			type: Types.File, 
			storage: localStorage
		},
		answerText1: {
			dependsOn: { question1: true },
			label: "Answer Text",
			type: Types.Textarea
		}
	},
	{
		question2: { type: Types.Boolean, label: "Enable Question 2" }
	},
	{ heading: "Question 2", dependsOn: { question2: true } },
	{
		title2: {
			dependsOn: { question2: true },
			label: "Question Title",
			type: Types.Text
		},
		answerImage2: {
			dependsOn: { question2: true },
			label: "Answer Image",
			type: Types.File, 
			storage: localStorage
		},
		answerText2: {
			dependsOn: { question2: true },
			label: "Answer Text",
			type: Types.Textarea
		}
	},
	{
		question3: { type: Types.Boolean, label: "Enable Question 3" }
	},
	{ heading: "Question 3", dependsOn: { question3: true } },
	{
		title3: {
			dependsOn: { question3: true },
			label: "Question Title",
			type: Types.Text
		},
		answerImage3: {
			dependsOn: { question3: true },
			label: "Answer Image",
			type: Types.File, 
			storage: localStorage
		},
		answerText3: {
			dependsOn: { question3: true },
			label: "Answer Text",
			type: Types.Textarea
		}
	},
	{
		question4: { type: Types.Boolean, label: "Enable Question 4" }
	},
	{ heading: "Question 4", dependsOn: { question4: true } },
	{
		title4: {
			dependsOn: { question4: true },
			label: "Question Title",
			type: Types.Text
		},
		answerImage4: {
			dependsOn: { question4: true },
			label: "Answer Image",
			type: Types.File, 
			storage: localStorage
		},
		answerText4: {
			dependsOn: { question4: true },
			label: "Answer Text",
			type: Types.Textarea
		}
	},
	{
		question5: { type: Types.Boolean, label: "Enable Question 5" }
	},
	{ heading: "Question 5", dependsOn: { question5: true } },
	{
		title5: {
			dependsOn: { question5: true },
			label: "Question Title",
			type: Types.Text
		},
		answerImage5: {
			dependsOn: { question5: true },
			label: "Answer Image",
			type: Types.File, 
			storage: localStorage
		},
		answerText5: {
			dependsOn: { question5: true },
			label: "Answer Text",
			type: Types.Textarea
		}
	},
	{
		question6: { type: Types.Boolean, label: "Enable Question 6" }
	},
	{ heading: "Question 6", dependsOn: { question6: true } },
	{
		title6: {
			dependsOn: { question6: true },
			label: "Question Title",
			type: Types.Text
		},
		answerImage6: {
			dependsOn: { question6: true },
			label: "Answer Image",
			type: Types.File, 
			storage: localStorage
		},
		answerText6: {
			dependsOn: { question6: true },
			label: "Answer Text",
			type: Types.Textarea
		}
	}
);


/**
 * Registration
 */
Faq.defaultColumns = 'title';
Faq.register();
