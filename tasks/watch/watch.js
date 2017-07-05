const gulp = require('gulp');

function watch() {
  // empty
}
watch.description = 'Rebuild application components on file changes.';

const tasksToRun = [
  'watch:app',
  'watch:assets',
  'watch:styles',
  'watch:views'
];

gulp.task('watch', tasksToRun, watch);
