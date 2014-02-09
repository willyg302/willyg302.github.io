$(function() {
	$('a[rel=tipsy]').tipsy({fade: true, gravity: 'n'});  // Init our tooltips!

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

	// Bind filter buttons
	$('#filters').on('click', 'button', function() {
		$container.isotope({filter: $(this).attr('data-filter-value')});
	});

	// Bind sort buttons
	$('#sorts').on('click', 'button', function() {
		$container.isotope({sortBy: $(this).attr('data-sort-value')});
	});
	
	// Change [is-checked] class on buttons
	$('.button-group').each(function(i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		});
	});
});