import gulp from 'gulp';
import { watchApp } from '@tasks/watch/_app';
import { watchAssets } from '@tasks/watch/_assets';
import { watchStyles } from '@tasks/watch/_styles';
import { watchViews } from '@tasks/watch/_views';

/**
 * Task: watch
 */
export const watch = gulp.parallel(
  watchApp,
  watchAssets,
  watchStyles,
  watchViews
);
watch.displayName = 'watch';
watch.description = 'Rebuild all application components on change.';

gulp.task(watch);
