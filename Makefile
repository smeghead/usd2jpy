FILES = README.md background.js content-script.js icon.png jquery-1.7.2.js manifest.json

.PHONY: dist
default:

dist:
	rm -rf dist
	mkdir -p dist/usd2jpy
	cp $(FILES) dist/usd2jpy
	cd dist && zip -r usd2jpy.zip usd2jpy
