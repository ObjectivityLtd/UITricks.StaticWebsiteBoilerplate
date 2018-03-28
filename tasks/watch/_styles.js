import gulp from 'gulp';
import * as config from '@tasks/config';
import { buildStyles } from '@tasks/build/_styles';
import { reloadServer } from '@tasks/serve/_reload';

function rebuildOnChange() {
  gulp.watch(`${config.paths.src}/styles/**/*.+(sass|scss)`, gulp.series(buildStyles, reloadServer));
}

/**
 * Task: watch:styles
 */
export const watchStyles = gulp.series(
  buildStyles,
  rebuildOnChange
);
watchStyles.displayName = 'watch:styles';
watchStyles.description = 'Recompile Sass files on change.';

gulp.task(watchStyles);
