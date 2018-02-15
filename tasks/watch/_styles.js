import gulp from 'gulp';
import buildStyles from '../build/_styles';
import * as config from '../config';

function rebuildOnChanges() {
  gulp.watch('src/styles/**/*.scss', gulp.parallel(buildStyles));
}

/**
 * Task: watch:styles
 */
const watchStyles = gulp.series(
  buildStyles,
  rebuildOnChanges
);
watchStyles.displayName = 'watch:styles';
watchStyles.description = 'Recompile Sass files on changes.';

gulp.task(watchStyles);

export default watchStyles;
