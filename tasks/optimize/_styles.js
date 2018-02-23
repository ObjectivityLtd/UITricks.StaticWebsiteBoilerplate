import gulp from 'gulp';
import cleanCss from 'gulp-clean-css';
import * as config from '@tasks/config';

/**
 * Task: optimize:styles
 */
export function optimizeStyles() {
  const options = {
    compatibility: 'ie11',
    specialComments: false
  };

  return gulp.src(`${config.paths.dist}/styles/**/*.css`)
    .pipe(cleanCss(options))
    .pipe(gulp.dest(`${config.paths.dist}/styles`));
}
optimizeStyles.displayName = 'optimize:styles';
optimizeStyles.description = 'Perform styles minification and strip comments.';

gulp.task(optimizeStyles);
