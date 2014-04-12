/*
var funfact = [
	"I own four guitars and jam quite frequently",
	"I have never been to Antarctica",
	"my favorite country is Djibouti because it sounds cool",
	"my high score in bowling is 278",
	"I am a big proponent of open source projects",
	"my favorite number is 1 in decennoval"
];

randomFact = function() {
	$("#fact").fadeOut(function() {
		$("#fact").text(funfact[Math.floor(Math.random() * funfact.length)] + ".");
		$("#fact").fadeIn(function() {
			setTimeout(randomFact, 10000);
		});
	});
};*/

$(function() {
	// randomFact();  // Yay fun facts! [EDIT: not for now...]
	
	// Initialize Isotope AFTER images have been loaded
	var $container = $('.isotope').imagesLoaded(function() {
		$container.isotope({
			itemSelector: '.item',
			layoutMode: 'masonry',
			masonry: {
				columnWidth: 72  // Magic number: 64 + 2*4 (64 = width of smallest square, 4 = smallest margin)
			}
		});
	});

	// Filters
	$('ul.menu > li > a').on('click', function(e) {
		var self = $(this);
		e.preventDefault();
		$('ul.menu').find('a.active').removeClass('active');
		self.addClass('active');
		$container.isotope({filter: self.attr('data-filter')});
	});

	// Handle expandable tiles
	$container.on('click', '.expandable', function() {
		var self = $(this);
		self.toggleClass(self.find('#expand').html());
		self.find('#content').toggle();
		$container.isotope('layout');
	});
});