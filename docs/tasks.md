# Tasks
Tasks can be used to automate various actions like running local web server,
copying assets, creating and optimizing builds or watching file changes.
Website Boilerplate provides a set of tasks useful in daily development.
You can run it from CLI like any other command. Some tasks have support for
[flags]([flags.md) which may be used to override default configuration values. 

All tasks included in Website Boilerplate are run by [gulp](https://gulpjs.com).
Tasks are written in JavaScript (ES6 syntax transpiled by Babel). Source code
is located in `tasks/` directory. Tasks are automatically registered by
[require-dir](https://www.npmjs.com/package/require-dir) plugin. 

## Example usage
```sh
gulp serve
gulp build:styles
gulp build --target=prod --env=prod
```

## Configuration file
Tasks configuration is stored in JSON file located in `tasks/config.json`.
In this file you can configure default local web server settings (like port,
hostname, live reload), define environment files (default `dev` and `prod`)
or provide a list of assets and scripts. More about configuration:
* [Using environment files](environment-files.md)
* [Copying static assets](copying-static-assets.md)
* [Compiling scripts](compiling-scripts.md)

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
* `optimize` – Optimize application scripts, styles and views from build output directory.
  * `optimize:app` – Perform scripts minification.
  * `optimize:styles` – Perform styles minification and strip comments.
  * `optimize:views` – Collapse whitespace and perform minification of inline JavaScript in compiled views.
* `serve` – Run application server for development. This is the default task.
* `watch` – Rebuild all application components on change.
  * `watch:app` – Rebuild application scripts on change.
  * `watch:assets` – Update static assets on change.
  * `watch:styles` – Recompile Sass files on change.
  * `watch:views` – Recompile nunjucks templates on change.
