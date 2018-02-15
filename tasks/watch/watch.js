import gulp from 'gulp';
import watchApp from './_app';
import watchAssets from './_assets';
import watchStyles from './_styles';
import watchViews from './_views';

/**
 * Task: watch
 */
const watch = gulp.parallel(
  watchApp,
  watchAssets,
  watchStyles,
  watchViews
);
watch.displayName = 'watch';
watch.description = 'Rebuild application components on changes.';

gulp.task(watch);

export default watch;
