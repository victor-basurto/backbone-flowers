// Namespace our flowerApp
var app = app || {};

app.FlowerCollection = Backbone.Collection.extend({
	// pass the single model as model
	model: app.singleFlower
});

// European Flower Collection
app.EuropeanFlower = Backbone.Collection.extend({
	// pass the flowers to this group
	model: app.europeanFlower
});