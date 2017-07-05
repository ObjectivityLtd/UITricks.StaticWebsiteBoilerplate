const config = require('../config.js');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

function serve() {
  plugins.connect.server({
    root: config.serve.path,
    port: config.serve.port,
    livereload: config.serve.livereload
  });
}
serve.description = 'Run application server for development.';
serve.flags = {
  '--port': 'Port used to run the application server (overrides config.js value).',
  '--livereload': 'Enable/disable live reload on file changes (overrides config.js value).',
};

gulp.task('serve', ['watch'], serve);
