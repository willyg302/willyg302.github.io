require.config({
	packages: [],
	paths: {
		'imagesloaded'      : '../bower_components/imagesloaded/imagesloaded.pkgd',
		'isotope'           : '../bower_components/isotope/dist/isotope.pkgd'
	},
	shim: {
	}
});

require([
	'imagesloaded',
	'isotope'
], function(imagesLoaded, Isotope) {
	var container = document.getElementById('iso');
	var iso;

	// Initialize Isotope AFTER images have been loaded
	imagesLoaded(container, function() {
		iso = new Isotope(container, {
			itemSelector: '.item',
			layoutMode: 'masonry',
			masonry: {
				columnWidth: 72  // Magic number: 64 + 2*4 (64 = width of smallest square, 4 = smallest margin)
			}
		});
	});

	// Handle expandable tiles
	var expandables = document.querySelectorAll('.expandable');
	for (var i = 0; i < expandables.length; i++) {
		expandables[i].onclick = function() {
			this.classList.toggle(this.dataset.x);
			this.classList.toggle(this.dataset.y);
			var content = this.querySelector('#content');
			content.style.display = (content.style.display === 'block' ? 'none' : 'block');
			iso.layout();
		};
	}
});


/*

$(function() {

	// Filters
	$('ul.menu > li > a').on('click', function(e) {
		var self = $(this);
		e.preventDefault();
		$('ul.menu').find('a.active').removeClass('active');
		self.addClass('active');
		window.location.hash = self.attr('href');
		$container.isotope({filter: self.attr('data-filter')});
	});

	// Handle initial hash, if any
	$('a[href="' + window.location.hash + '"]').trigger('click');
});
*/