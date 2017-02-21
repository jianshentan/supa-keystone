var keystone = require('keystone');
var keystoneStorageNameFunctions = require('keystone-storage-namefunctions');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Tile = new keystone.List('Tile', {
	autokey: { path: 'slug', from: 'title', unique: true },
	sortable: true,	
	singular: 'Tile', 
	plural: 'Tiles'
});

// guide: https://github.com/keystonejs/keystone/tree/master/lib/storage
var localStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads',
		publicPath: '/uploads',
		generateFilename: keystoneStorageNameFunctions.originalFilename
	}
})

Tile.add(
	"Tile",
	{
		title: { type: Types.Text, required: true, initial: true },
		// default
		color: { type: Types.Color, required: true, default: '#000000' },
		backgroundColor: { type: Types.Color, required: true, default: "#FFFFFF" },
		backgroundImage: { type: Types.File, storage: localStorage },
		topLeftText: { type: Types.Text },
		topRightText: { type: Types.Text },
		bottomLeftText: { type: Types.Text },
		bottomRightText: { type: Types.Text },
		// template selection
		template: { 
			type: Types.Select, 
			numeric: true, 
			required: true,
			options: [{ value: 1, label: 'Centered Button'},
								{ value: 2, label: 'Tagline + Button'},
								{ value: 3, label: 'Image + Button'},
								{ value: 4, label: 'Tagline + Body Text'}],
			initial: true
		}
	},
	// header for Template 1
	{ heading: "Template 1: Centered Button", dependsOn: { template: 1 } },
	{
		// Unique to Template 1
		buttonTextT1: { 
			dependsOn: { template: 1 },
			label: "Button Text",
			type: Types.Text
		},
		buttonUrlT1: { 
			dependsOn: { template: 1 },
			label: "Button URL",
			type: Types.Url
		}
	},
	// header for Template 2
	{ heading: "Template 2: Tagline + Button", dependsOn: { template: 2 } },
	{
		taglineT2: { 
			dependsOn: { template: 2 },
			label: "Tagline",
			type: Types.Text 
		},
		buttonTextT2: { 
			dependsOn: { template: 2 },
			label: "Button Text",
			type: Types.Text
		},
		buttonUrlT2: { 
			dependsOn: { template: 2 },
			label: "Button URL",
			type: Types.Url, 
		}	
	},
	// header for Template 3
	{ heading: "Template 3: Image + Button", dependsOn: { template: 3 } },
	{
		imageT3: { 
			dependsOn: { template: 3 },
			label: "Image",
			type: Types.File, 
			storage: localStorage
		},
		buttonTextT3: { 
			dependsOn: { template: 3 },
			label: "Button Text",
			type: Types.Text
		},
		buttonUrlT3: { 
			dependsOn: { template: 3 },
			label: "Button URL",
			type: Types.Url
		}
	},
	// header for Template 4
	{ heading: "Template 4: Tagline + Body Text", dependsOn: { template: 4 } },
	{
		taglineT4: { 
			dependsOn: { template: 4 },
			label: "Tagline",
			type: Types.Text
		},
		bodyHtmlT4: {
			dependsOn: { template: 4 },
			label: "Body Html",
			type: Types.Html,
			wysiwyg: true
		}
	}
);

/**
 * Registration
 */
Tile.defaultColumns = 'title, template';
Tile.register();
