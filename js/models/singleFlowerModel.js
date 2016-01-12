var app = app || {}; // name of the app

/**
 * Single Flower Model
 */
app.singleFlower = Backbone.Model.extend({
	defaults: {
		color: 'pink',
		img: 'images/placeholder.jpg'
	}
	/*
	initialize: function() {
		console.log('A model instance named: ' + this.get('name') + 'has been created and it costs: ' + this.get('price'));;

		// listening for changes
		this.on('change', function() {
			console.log('something in our model has change');
		});

		// listening on a specific model
		this.on('change:price', function() {
			console.log('The Price for the ' + this.get('name') + ' Model just changed to: $' + this.get('price') + ' dollars');
		});
	}*/
});

/**
 * Erupean Flower Model
 */
app.europeanFlower = Backbone.Model.extend({
	// default values
	defaults: {
		color: 'pink',
		img: 'images/placeholder.jpg'
	}
	/*
	initialize: function() {
		console.log('An instance model: ', this.get('name') + ' has been created and it costs: ' + this.get('price') + ' to the European Flower collection');
		this.on('change:price', function() {
			console.log('the price for the ' + this.get('name') + ' Model just changed to: ' + this.get('price'));
		});
	}*/
});
