const config = require('../config.js');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

function buildApp() {
  return gulp.src(config.scripts)
    .pipe(plugins.concat('app.js'))
    .pipe(gulp.dest('build/app'));
}
buildApp.description = 'Build application scripts.';

gulp.task('build:app', buildApp);
