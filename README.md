# UITricks.StaticWebsiteBoilerplate

## About
Static Website Boilerplate is a small project start package. It aims to simplify set-up
and development by delivering complete project structure and automation for common tasks.

Static Website Boilerplate includes:
* [Nunjucks](https://mozilla.github.io/nunjucks/) – a rich and powerful templating language developed by Mozilla.
* [gulp](http://gulpjs.com) – tasks runner for automation process.
* [gulp-connect](https://www.npmjs.com/package/gulp-connect) – lightweight web server with support for live reload (sponsored by JetBrains).
* [Sass](http://sass-lang.com) – the most popular CSS preprocessor.
* [Bootstrap Sass](https://github.com/twbs/bootstrap-sass) – Bootstrap UI framework in Sass version to benefit from variables and mixins.
* [jQuery](https://jquery.com) – JavaScript library for easy DOM manipulation.


## How to run the project
1. Start with installing gulp-cli (you can skip this if you already have it):  
`npm install --global gulp-cli`

2. Install project dependencies:  
`npm install`

3. Build website and run development server using task:  
`gulp serve`

4. Open website in a browser by navigating to: http://localhost:8080
(default port can be changed in `tasks/config.js`).


## Gulp tasks
You can always run `gulp --tasks` command from CLI to get the full tasks list.
Tu run the task, type `gulp` followed by task name e.g. `gulp build` or `gulp watch:styles`.
Default gulp tasks is `serve`.

* `build` – Build application for development.
  * `build:app` – Build application scripts.
  * `build:assets` – Copy static assets like icons or images.
  * `build:styles` – Compile Sass files to CSS.
  * `build:views` – Compile templates to plain HTML.
* `watch` – Rebuild application components on file changes.
  * `watch:app` – Rebuild application scripts.
  * `watch:assets` – Watch static assets changes.
  * `watch:styles` – Recompile Sass files on changes.
  * `watch:views` – Recompile templates on changes.
* `serve` – Run application server for development.


## Future plans
* Move all path definitions from gulp tasks to config.js
* Improved documentation
* Tasks to prepare minified and optimized bundle
* Easy integration with Vue.js
