const gulp = require('gulp');

function watchStyles() {
  gulp.watch('src/styles/**/*.scss', ['build:styles']);
}
watchStyles.description = 'Recompile Sass files on changes.';

gulp.task('watch:styles', ['build:styles'], watchStyles);
