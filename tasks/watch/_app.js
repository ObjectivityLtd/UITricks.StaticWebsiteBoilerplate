import gulp from 'gulp';
import buildApp from '../build/_app';

/**
 * Task: watch:app
 */
function watchApp() {
  gulp.watch('src/app/**/*.js', gulp.parallel(buildApp));
}
watchApp.displayName = 'watch:app';
watchApp.description = 'Rebuild application scripts on changes.';

gulp.task(watchApp);

export default watchApp;
