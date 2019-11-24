# willyg302.github.io

Source code for my [personal website](https://willyg302.github.io/) and other random things like my resume.

## Hacking

The site itself uses [TiddlyWiki](https://tiddlywiki.com/), so you need to have that installed first: `sudo npm install -g tiddlywiki`. After that you can run `make watch` and visit `http://localhost:8080/` to mess around. Any changes you make will be auto-synced to the `tiddlers/` folder. If you want to make a change to the production site that you *don't* want locally (for example, disabling editing of tiddlers), copy the resulting files to `customizations/`.

Run `make build` when you're ready to generate a production bundle. This produces the single file `index.html` that GitHub Pages will look for.

## TODO

- Integrate https://utteranc.es/ on blog posts.
