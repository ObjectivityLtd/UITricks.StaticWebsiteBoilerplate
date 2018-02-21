import gulp from 'gulp';
import buildApp from '../build/_app';
import reloadServer from '../serve/_reload';
import * as config from '../config';

function rebuildOnChange() {
  gulp.watch('src/app/**/*.js', gulp.series(buildApp, reloadServer));
}

/**
 * Task: watch:app
 */
const watchApp = gulp.series(
  buildApp,
  rebuildOnChange
);
watchApp.displayName = 'watch:app';
watchApp.description = 'Rebuild application scripts on change.';

gulp.task(watchApp);

export default watchApp;
