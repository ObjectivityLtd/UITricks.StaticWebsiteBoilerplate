const gulp = require('gulp');

function watchAssets() {
  gulp.watch('src/assets', ['build:assets']);
}
watchAssets.description = 'Watch static assets changes.';

gulp.task('watch:assets', ['build:assets'], watchAssets);
