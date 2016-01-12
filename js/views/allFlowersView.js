var app = app || {};

// View for all flowers
app.AllFlowersView = Backbone.View.extend({

	tagName: 'section',

	render: function() {
		this.collection.each(this.addFlower, this);
		return this;
	},

	addFlower: function( flower ) {
		var flowerView = new app.SingleFlowerView({ model: flower });
		this.$el.append(flowerView.render().el);
	}

});

/**
 * All European Flowers
 */
app.AllEuroFlowersView = Backbone.View.extend({

	tagName: 'section',

	// render the flowers
	render: function() {
		this.collection.each(this.addEuroFlower, this);
		return this;
	},

	// addEuroFlower
	addEuroFlower: function( euroFlower ) {
		var euroFlowerView = new app.SingleEuropeanFlowerView({ model: euroFlower });
		this.$el.append(euroFlowerView.render().el);
	}

});