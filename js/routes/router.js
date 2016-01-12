var app = app || {};

app.Router = Backbone.Router.extend({

	routes: {
		'': 'noCopy',
		'heirloomRose': 'heirloomRoseMessage',
		'rainbowRose': 'rainbowRoseMessage',
		'redRose': 'redRoseMessage',
		'tantalizingTulips': 'tantalizingTulipsMessage',
		'fleurDelis': 'fleurDelisMessage'
	},

	noCopy: function() {
		$('#copy').html('');
	},
	heirloomRoseMessage: function() {
		$('#copy').html('Heirloom Roses are great Mother\'s day flowers');
	},
	rainbowRoseMessage: function() {
		$('#copy').html('choose Rainbow Roses for your wedding');
	},
	redRoseMessage: function() {
		$('#copy').html('Red Roses give that special moment on Valentine\'s day');
	},
	tantalizingTulipsMessage: function() {
		$('#copy').html('This flowers are wonderful, besides the rare name');
	},
	fleurDelisMessage: function() {
		$('#copy').html('The love from France to your hand');
	}

});