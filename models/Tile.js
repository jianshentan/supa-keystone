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

Tile.add(
	"Tile",
	{
		title: { type: Types.Text, required: true, initial: true },
		// default
		color: { type: Types.Color, required: true, default: '#000000' },
		backgroundColor: { type: Types.Color, required: true, default: "#FFFFFF" },
		backgroundImage: { type: Types.CloudinaryImage },
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
								{ value: 4, label: 'Template: Image + Tagline'},
								{ value: 5, label: 'Template: Tagline + Body Text'},
								{ value: 6, label: 'Template: Tagline + Image Grid'},
								{ value: 7, label: 'Template: Video'},
								{ value: 8, label: 'Custom: Quickstart'},
								{ value: 9, label: 'Custom: Email Signup'},
								{ value: 10, label: 'Custom: Contact Form'}],
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
			options: 'top, center-top, center, center-bottom, bottom',
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
			options: 'top, center-top, center, center-bottom, bottom',
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
			options: 'top, center-top, center, center-bottom, bottom',
			default: 'center'	
		}
	},
	// header for Template 3
	{ heading: "Template: Image + Button", dependsOn: { template: 3 } },
	{
		imageT3: { 
			dependsOn: { template: 3 },
			label: "Image",
			type: Types.CloudinaryImage
		},
		imagePositionT3: {
			dependsOn: { template: 3 },
			label: "Image Position",
			type: Types.Select,
			options: 'top, center-top, center, center-bottom, bottom',
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
			options: 'top, center-top, center, center-bottom, bottom',
			default: 'center'	
		}
	},
	// header for Template 4
	{ heading: "Template: Image + Tagline", dependsOn: { template: 4 } },
	{
		imageT4: { 
			dependsOn: { template: 4 },
			label: "Image",
			type: Types.CloudinaryImage
		},
		imagePositionT4: {
			dependsOn: { template: 4 },
			label: "Image Position",
			type: Types.Select,
			options: 'top, center-top, center, center-bottom, bottom',
			default: 'center'	
		},
		taglineT4: { 
			dependsOn: { template: 4 },
			label: "Tagline",
			type: Types.Text 
		},
		taglinePositionT4: {
			dependsOn: { template: 4 },
			label: "Tagline Position",
			type: Types.Select,
			options: 'top, center-top, center, center-bottom, bottom',
			default: 'center'	
		},
	},
	// header for Template 5
	{ heading: "Template: Tagline + Body Text", dependsOn: { template: 5 } },
	{
		taglineT5: { 
			dependsOn: { template: 5 },
			label: "Tagline",
			type: Types.Text
		},
		bodyHtmlT5: {
			dependsOn: { template: 5 },
			label: "Body Html",
			type: Types.Html,
			wysiwyg: true
		}
	},
	// header for Template 6
	{ heading: "Template: Tagline + Image Grid", dependsOn: { template: 6 } },
	{
		taglineT6: {
			dependsOn: { template: 6 },
			label: "Tagline",
			type: Types.Text		
		},
		image1T6: {
			dependsOn: { template: 6 },
			label: "Image 1",
			type: Types.CloudinaryImage
		},
		image1UrlT6: {
			dependsOn: { template: 6 },
			label: "Image 1 URL",
			type: Types.Url
		},
		image2T6: {
			dependsOn: { template: 6 },
			label: "Image 2",
			type: Types.CloudinaryImage
		},
		image2UrlT6: {
			dependsOn: { template: 6 },
			label: "Image 2 URL",
			type: Types.Url
		},
		image3T6: {
			dependsOn: { template: 6 },
			label: "Image 3",
			type: Types.CloudinaryImage
		},
		image3UrlT6: {
			dependsOn: { template: 6 },
			label: "Image 3 URL",
			type: Types.Url
		},
		image4T6: {
			dependsOn: { template: 6 },
			label: "Image 4",
			type: Types.CloudinaryImage
		},
		image4UrlT6: {
			dependsOn: { template: 6 },
			label: "Image 4 URL",
			type: Types.Url
		}
	},
	// heading for Template 7
	{ heading: "Template: Video Player", dependsOn: { template: 7 } },
	{
		videoT7: {
			dependsOn: { template: 7 },
			label: "iFrame Code",
			type: Types.Html,
			wysiwyg: true
		},
		taglineT7: {
			dependsOn: { template: 7 },
			label: "Tagline",
			type: Types.Text		
		},
		taglinePositionT7: {
			dependsOn: { template: 7 },
			label: "Tagline Position",
			type: Types.Select,
			options: 'top, center-top, center, center-bottom, bottom',
			default: 'center'	
		},
	},
	// Text for Template 8
	{ heading: "Customized: Quickstart [no customization below]", dependsOn: { template: 8 } },
	// Text for Template 9
	{ heading: "Customized: Email Signup [no customization below]", dependsOn: { template: 9 } },
	// Text for Template 10
	{ heading: "Customized: Contact Form [no customization below]", dependsOn: { template: 10 } }
);

/**
 * Registration
 */
Tile.defaultColumns = 'title, template';
Tile.register();
