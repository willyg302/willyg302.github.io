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

	$('select').selectric({disableOnMobile: false});

	
	// Initialize Isotope AFTER images have been loaded
	var $container = $('.isotope').imagesLoaded(function() {
		$container.isotope({
			itemSelector: '.item',
			layoutMode: 'masonry',
			masonry: {
				columnWidth: 72  // Magic number: 64 + 4*4 (64 = width of smallest square, 4 = smallest margin)
			},
			getSortData: {
				name: '.title',
				symbol: '.symbol',
				number: '.number parseInt',
				category: '[data-category]',
				weight: function( itemElem ) {
					var weight = $( itemElem ).find('.weight').text();
					return parseFloat( weight.replace( /[\(\)]/g, '') );
				}
			}
		});
	});


	$('#filters select').change(function() {
		$container.isotope({filter: $(this).val()});
	});

	$('#sorts select').change(function() {
		$container.isotope({sortBy: $(this).val()});
	})

	$container.on('click', '.expandable', function() {
		var self = $(this);
		self.toggleClass(self.find('#expand').html());
		self.find('#content').toggle();
		$container.isotope('layout');
	});
});