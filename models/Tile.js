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
		publicPath: '/uploads'
		//generateFilename: keystoneStorageNameFunctions.originalFilename
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
			options: [{ value: 1, label: 'Template: Button'},
								{ value: 2, label: 'Template: Tagline + Button'},
								{ value: 3, label: 'Template: Image + Button'},
								{ value: 4, label: 'Template: Tagline + Body Text'},
								{ value: 5, label: 'Template: Tagline + Image Grid'}],
			initial: true
		}
	},
	// header for Template 1
	{ heading: "Template: Button", dependsOn: { template: 1 } },
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
		},
		buttonPositionT1: {
			dependsOn: { template: 1 },
			label: "Button Position",
			type: Types.Select,
			options: 'top, center, bottom, center-top, center-bottom',
			default: 'center'	
		}
	},
	// header for Template 2
	{ heading: "Template: Tagline + Button", dependsOn: { template: 2 } },
	{
		taglineT2: { 
			dependsOn: { template: 2 },
			label: "Tagline",
			type: Types.Text 
		},
		taglinePositionT2: {
			dependsOn: { template: 2 },
			label: "Tagline Position",
			type: Types.Select,
			options: 'top, center, bottom, center-top, center-bottom',
			default: 'center'	
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
		},
		buttonPositionT2: {
			dependsOn: { template: 2 },
			label: "Button Position",
			type: Types.Select,
			options: 'top, center, bottom, center-top, center-bottom',
			default: 'center'	
		}
	},
	// header for Template 3
	{ heading: "Template: Image + Button", dependsOn: { template: 3 } },
	{
		imageT3: { 
			dependsOn: { template: 3 },
			label: "Image",
			type: Types.File, 
			storage: localStorage
		},
		imagePositionT3: {
			dependsOn: { template: 3 },
			label: "Image Position",
			type: Types.Select,
			options: 'top, center, bottom, center-top, center-bottom',
			default: 'center'	
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
		},
		buttonPositionT3: {
			dependsOn: { template: 3 },
			label: "Button Position",
			type: Types.Select,
			options: 'top, center, bottom, center-top, center-bottom',
			default: 'center'	
		}
	},
	// header for Template 4
	{ heading: "Template: Tagline + Body Text", dependsOn: { template: 4 } },
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
	},
	// header for Template 5
	{ heading: "Template: Tagline + Image Grid", dependsOn: { template: 5 } },
	{
		taglineT5: {
			dependsOn: { template: 5 },
			label: "Tagline",
			type: Types.Text		
		},
		image1T5: {
			dependsOn: { template: 5 },
			label: "Image 1",
			type: Types.File, 
			storage: localStorage
		},
		image1UrlT5: {
			dependsOn: { template: 5 },
			label: "Image 1 URL",
			type: Types.Url
		},
		image2T5: {
			dependsOn: { template: 5 },
			label: "Image 2",
			type: Types.File, 
			storage: localStorage
		},
		image2UrlT5: {
			dependsOn: { template: 5 },
			label: "Image 2 URL",
			type: Types.Url
		},
		image3T5: {
			dependsOn: { template: 5 },
			label: "Image 3",
			type: Types.File, 
			storage: localStorage
		},
		image3UrlT5: {
			dependsOn: { template: 5 },
			label: "Image 3 URL",
			type: Types.Url
		},
		image4T5: {
			dependsOn: { template: 5 },
			label: "Image 4",
			type: Types.File, 
			storage: localStorage
		},
		image4UrlT5: {
			dependsOn: { template: 5 },
			label: "Image 4 URL",
			type: Types.Url
		}
	}
);

/**
 * Registration
 */
Tile.defaultColumns = 'title, template';
Tile.register();
