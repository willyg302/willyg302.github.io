BUILD = build

.PHONY: build clean watch

build: clean
	@echo 'Building...'
	@mkdir -p $(BUILD)
	@cp -R tiddlywiki.info tiddlers $(BUILD)
	@cp customizations/* $(BUILD)/tiddlers
	@tiddlywiki $(BUILD) --output . --build index
	@echo 'Build available at:' file://$(shell pwd)/index.html

clean:
	rm -rf $(BUILD)

watch:
	@tiddlywiki . --listen
