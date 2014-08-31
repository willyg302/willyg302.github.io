require.config({
	packages: [],
	paths: {
		'imagesloaded': '../bower_components/imagesloaded/imagesloaded.pkgd',
		'isotope'     : '../bower_components/isotope/dist/isotope.pkgd'
	},
	shim: {
	}
});

require([
	'imagesloaded',
	'isotope'
], function(imagesLoaded, Isotope) {
	var container = document.getElementById('isotope');
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
		document.querySelector('[data-href="' + (window.location.hash || "#") + '"]').click();
	});

	// Handle expandable tiles
	var expandables = document.querySelectorAll('.expandable');
	for (var i = 0; i < expandables.length; i++) {
		expandables[i].onclick = function() {
			this.classList.toggle(this.dataset.x);
			this.classList.toggle(this.dataset.y);
			var content = this.getElementsByClassName('content')[0];
			content.style.display = (content.style.display === 'block' ? 'none' : 'block');
			iso.layout();
		};
	}

	// Filters
	var filters = document.querySelectorAll('.nav');
	for (var i = 0; i < filters.length; i++) {
		filters[i].onclick = function(e) {
			e.preventDefault();
			document.querySelector('.nav.active').classList.remove('active');
			this.classList.add('active');
			window.location.hash = this.dataset.href;
			iso.arrange({filter: this.dataset.filter});
		};
	}
});
