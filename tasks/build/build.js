const gulp = require('gulp');

function build() {
  // empty
}
build.description = 'Build application for development.';

const tasksToRun = [
  'build:app',
  'build:assets',
  'build:styles',
  'build:views'
];

gulp.task('build', tasksToRun, build);
