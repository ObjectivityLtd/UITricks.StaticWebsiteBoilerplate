import gulp from 'gulp';
import buildApp from '../build/_app';
import * as config from '../config';

function rebuildOnChanges() {
  gulp.watch('src/app/**/*.js', gulp.parallel(buildApp));
}

/**
 * Task: watch:app
 */
const watchApp = gulp.series(
  buildApp,
  rebuildOnChanges
);
watchApp.displayName = 'watch:app';
watchApp.description = 'Rebuild application scripts on changes.';

gulp.task(watchApp);

export default watchApp;
