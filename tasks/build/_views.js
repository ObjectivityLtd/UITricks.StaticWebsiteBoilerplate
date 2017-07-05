const config = require('../config.js');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

function buildViews() {
  return gulp.src('src/views/pages/**/*.njk')
    .pipe(plugins.nunjucksRender({
      path: [
        'src/views',
        'src/assets/icons'
      ]
    }))
    .pipe(gulp.dest('build'))
    .pipe(plugins.connect.reload());
}
buildViews.description = 'Compile templates to plain HTML.';

gulp.task('build:views', buildViews);
