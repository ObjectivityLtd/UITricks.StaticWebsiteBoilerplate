import gulp from 'gulp';
import buildStyles from '../build/_styles';
import * as config from '../config';

/**
 * Task: watch:styles
 */
function watchStyles() {
  gulp.watch('src/styles/**/*.scss', gulp.parallel(buildStyles));
}
watchStyles.displayName = 'watch:styles';
watchStyles.description = 'Recompile Sass files on changes.';

gulp.task(watchStyles);

export default watchStyles;
