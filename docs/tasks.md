# Tasks

## Example usage
```sh
gulp serve
gulp build
gulp build:styles
```

## Available tasks
* `build` – Build application scripts, copy assets, compile styles and views.
  * `build:app` – Build application scripts.
  * `build:assets` – Copy static assets like fonts, images, icons, favicon, web.config etc.
  * `build:styles` – Compile Sass files to CSS.
  * `build:views` – Compile nunjucks templates to HTML.
* `clean` – Remove build output directory.
  * `clean:app` – Clean application scripts from build output directory.
  * `clean:assets` – Clean copied assets from build output directory.
  * `clean:styles` – Clean compiled styles from build output directory.
  * `clean:views` – Clean compiled views from build output directory.
* `optimize` – Optimize application scripts, styles and views.
  * `optimize:app` – Perform scripts minification.
  * `optimize:styles` – Perform styles minification and strip comments.
  * `optimize:views` – Collapse whitespace and perform minification of inline JavaScript in compiled views.
* `serve` – Run application server for development.
* `watch` – Rebuild all application components on change.
  * `watch:app` – Rebuild application scripts on change.
  * `watch:assets` – Update static assets on change.
  * `watch:styles` – Recompile Sass files on change.
  * `watch:views` – Recompile nunjucks templates on change.
