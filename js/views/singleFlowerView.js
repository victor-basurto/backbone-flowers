// namespace view
var app = app || {};

app.SingleFlowerView = Backbone.View.extend({

	tagName: "article",
	className: 'flowerListItem',

	// define the template
	template: _.template( $('#flowerElement').html() ),

	render: function() {
		var flowerTemplate = this.template(this.model.toJSON());
		this.$el.html(flowerTemplate);
		return this;
	},
	events: {
		'mouseover': 'addBgColor',
		'mouseout': 'removeBgColor',
		'click': 'youClickedMe'
	},
	addBgColor: function() {
		this.$el.addClass('bgColorImage');
	},
	removeBgColor: function () {
		this.$el.removeClass('bgColorImage');
	},
	youClickedMe: function() {
		alert('you clicked the: ' + this.model.get('name') + ' model');
		return this;
	}

});

/**
 * Single View for European Flower
 */
app.SingleEuropeanFlowerView = Backbone.View.extend({

	tagName: 'article',
	className: 'flowerListItem',

	// template
	template: _.template( $('#extra-flowers').html() ),

	// render the view
	render: function() {
		var euroFlowerTemplate = this.template( this.model.toJSON() );
		this.$el.html(euroFlowerTemplate);
		return this;
	}

});