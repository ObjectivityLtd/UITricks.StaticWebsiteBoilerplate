v1.0.0-dev
-------------------
- Rewrite tasks to Gulp 4 and ES6
- Add Babel to transpile tasks and application code
- Add support for flags to override tasks configuration from CLI
- Add support for environment variables injected to views
- Add possibility to copy assets from any source to custom destination path
- Add task to clean build output directory
- Add subtasks to clean app, assets, styles and views from build output directory
- Add tasks to optimize application scripts, compiled styles and views 
- Add new settings to tasks configuration file
- Add stylelint with minimal recommended configuration
- Add source maps for Sass
- Change `gulp-connect` plugin to Browsersync
- Change output directory from `build` to `dist`


v0.1.1 (2017-08-10)
-------------------
- Fix duplicated Sass variables import
- Rename ambiguous `scaffolding.scss` to `core.scss`


v0.1.0 (2017-07-06)
-------------------
- Initial release
