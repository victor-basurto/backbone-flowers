/**
 * Instantiation
 */
// Red Roses
var redRoses = new app.singleFlower({
	name: 'Red Roses',
	price: 39.95,
	color: 'Red',
	img: 'images/redRoses.jpg',
	link: 'redRose'
});

// Rainbow Roses
var rainbowRoses = new app.singleFlower({
	name: 'Rainbow Roses',
	price: 29.95,
	color: 'Orange',
	link: 'rainbowRose'
});

// Heirloom Roses
var heirloomRoses = new app.singleFlower({
	name: 'Heirloom Roses',
	price: 19.95,
	img: 'images/heirloomPinkRoses.jpg',
	link: 'heirloomRose'
});

// Tantalizing Tulips Roses
var tantalizingTulips = new app.europeanFlower({
	originCountry: 'Holland',
	name: 'Tantalizing Tulips',
	price: 21.99,
	img: 'images/heirloomPinkRoses.jpg',
	color: 'green',
	link: 'tantalizingTulips'
});

// Fleur De Lis Roses
var fleurDelis = new app.europeanFlower({
	originCountry: 'Holland',
	name: 'Fleur-de-lis',
	price: 34.99,
	img: 'images/redRoses.jpg',
	color: 'Fiusha',
	link: 'fleurDelis'
});

// flowers collection array
var flowerGroup = new app.FlowerCollection([
	redRoses, rainbowRoses, heirloomRoses
]);

// euro-flowers collection array
var europeanFlowerGroup = new app.EuropeanFlower([
	fleurDelis, tantalizingTulips
]);

// pass collection to flowerGroup
var flowerGroupView = new app.AllFlowersView({ collection: flowerGroup });
$('#allFlowers').html(flowerGroupView.render().el);		// render the collection


// render the european flowers
var euroFlowerGroupView = new app.AllEuroFlowersView({ collection: europeanFlowerGroup });
$('#more-flowers').html(euroFlowerGroupView.render().el);	// render the collection

// test your collection
console.log(flowerGroup.toJSON());
console.log(europeanFlowerGroup.toJSON());

// keep history
var flowerRouter = new app.Router();
Backbone.history.start();
