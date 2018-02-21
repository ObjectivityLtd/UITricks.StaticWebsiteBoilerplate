import gulp from 'gulp';
import buildStyles from '../build/_styles';
import reloadServer from '../serve/_reload';
import * as config from '../config';

function rebuildOnChange() {
  gulp.watch('src/styles/**/*.scss', gulp.series(buildStyles, reloadServer));
}

/**
 * Task: watch:styles
 */
const watchStyles = gulp.series(
  buildStyles,
  rebuildOnChange
);
watchStyles.displayName = 'watch:styles';
watchStyles.description = 'Recompile Sass files on change.';

gulp.task(watchStyles);

export default watchStyles;
