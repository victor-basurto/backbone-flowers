// instantiation
var redRoses = new app.singleFlower({
	name: 'Red Roses',
	price: 39.95,
	color: 'Red',
	img: 'images/redRoses.jpg',
	link: 'redRose'
});

var rainbowRoses = new app.singleFlower({
	name: 'Rainbow Roses',
	price: 29.95,
	color: 'Orange',
	link: 'rainbowRose'
});

var heirloomRoses = new app.singleFlower({
	name: 'Heirloom Roses',
	price: 19.95,
	img: 'images/heirloomPinkRoses.jpg',
	link: 'heirloomRose'
});

var tantalizingTulips = new app.europeanFlower({
	originCountry: 'Holland',
	name: 'Tantalizing Tulips',
	price: 21.99,
	img: 'images/heirloomPinkRoses.jpg',
	color: 'green',
	link: 'tantalizingTulips'
});

var fleurDelis = new app.europeanFlower({
	originCountry: 'Holland',
	name: 'Fleur-de-lis',
	price: 34.99,
	img: 'images/redRoses.jpg',
	color: 'Fiusha',
	link: 'fleurDelis'
});

// create a collection
var flowerGroup = new app.FlowerCollection([
	redRoses, rainbowRoses, heirloomRoses
]);

// create collection
var europeanFlowerGroup = new app.EuropeanFlower([
	fleurDelis, tantalizingTulips
]);

// pass collection to flowerGroup
var flowerGroupView = new app.AllFlowersView({ collection: flowerGroup });

// render the view
$('#allFlowers').html(flowerGroupView.render().el);


// render the european flowers
var euroFlowerGroupView = new app.AllEuroFlowersView({ collection: europeanFlowerGroup });
$('#more-flowers').html(euroFlowerGroupView.render().el);


// tantalizingTulips.set('originCoutry', 'Holland');
// fleurDelis.set('originCoutry', 'Holland');

console.log(flowerGroup.toJSON());
console.log(europeanFlowerGroup.toJSON());

// keep history
var flowerRouter = new app.Router();

Backbone.history.start();
