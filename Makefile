install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
publish:
	npm publish --dty-run
lint:
	npx eslint
