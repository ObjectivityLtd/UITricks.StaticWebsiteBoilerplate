const gulp = require('gulp');

function watchViews() {
  gulp.watch('src/views/**/*.njk', ['build:views']);
}
watchViews.description = 'Recompile templates on changes.';

gulp.task('watch:views', ['build:views'], watchViews);
