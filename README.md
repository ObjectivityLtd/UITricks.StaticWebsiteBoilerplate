# Website Boilerplate
*Creating static websites made easy.* Website Boilerplate is a small starting package
that aims to simplify project set-up and development. Inspired by Angular CLI.

Integrated plugins:
[Gulp 4](https://gulpjs.com),
[Nunjucks](https://mozilla.github.io/nunjucks/),
[Babel](https://babeljs.io),
[Sass](https://sass-lang.com),
[Browsersync](https://browsersync.io),
[stylelint](https://stylelint.io)


## How to run the project
1. Clone this repository.
2. Install gulp-cli: `npm install --global gulp-cli`
3. Install project dependencies `npm install`
4. Run web server and build project: `gulp serve -o`


## Tasks
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
