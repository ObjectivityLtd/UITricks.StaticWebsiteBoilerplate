import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import * as config from '@tasks/config';

/**
 * Task: optimize:views
 */
export function optimizeViews() {
  const options = {
    collapseWhitespace: true,
    minifyJS: true
  };

  return gulp.src(`${config.paths.dist}/**/*.html`)
    .pipe(htmlmin(options))
    .pipe(gulp.dest(config.paths.dist));
}
optimizeViews.displayName = 'optimize:views';
optimizeViews.description = 'Collapse whitespace and perform minification of inline JavaScript in compiled views.';

gulp.task(optimizeViews);
