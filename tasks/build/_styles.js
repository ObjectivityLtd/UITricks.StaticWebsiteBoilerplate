const config = require('../config.js');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

function buildStyles() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(gulp.dest('build/styles'))
    .pipe(plugins.connect.reload());
}
buildStyles.description = 'Compile Sass files to CSS.';

gulp.task('build:styles', buildStyles);
