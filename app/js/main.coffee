Isotope = require 'isotope-layout'
imagesLoaded = require 'imagesloaded'

container = document.getElementById 'isotope'


# Initialize Isotope AFTER images have been loaded
imagesLoaded container, () =>
	window.iso = new Isotope container, {
		itemSelector: '.item',
		layoutMode: 'masonry',
		masonry: {
			columnWidth: 72  # Magic number: 64 + 2*4 (64 = width of smallest square, 4 = smallest margin)
		}
	}
	document.querySelector("[href=\"#{ window.location.hash || '#' }\"]").click()

# Handle expandable tiles
for expandable in document.querySelectorAll '.expandable'
	do (expandable) ->
		expandable.onclick = ->
			@classList.toggle @dataset.x
			@classList.toggle @dataset.y
			content = (@getElementsByClassName 'content')[0]
			content.style.display = if content.style.display is 'block' then 'none' else 'block'
			window.iso.layout()

# Filters
for filter in document.querySelectorAll '.nav > a'
	if filter.dataset.filter?
		do (filter) ->
			filter.onclick = (e) ->
				e.preventDefault()
				document.querySelector('.nav .active').classList.remove 'active'
				@classList.add 'active'
				window.location.hash = @href.substring @href.indexOf '#'
				window.iso.arrange {filter: @dataset.filter}
				return false
