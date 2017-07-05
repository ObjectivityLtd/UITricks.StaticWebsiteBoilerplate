const gulp = require('gulp');

function watchApp() {
  gulp.watch('src/app/**/*.js', ['build:app']);
}
watchApp.description = 'Rebuild application scripts.';

gulp.task('watch:app', ['build:app'], watchApp);
