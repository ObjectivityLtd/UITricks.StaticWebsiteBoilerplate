import gulp from 'gulp';
import uglify from 'gulp-uglify';
import * as config from '@tasks/config';

/**
 * Task: optimize:app
 */
export function optimizeApp() {
  return gulp.src(`${config.paths.dist}/app/**/*.js`)
    .pipe(uglify())
    .pipe(gulp.dest(`${config.paths.dist}/app`));
}
optimizeApp.displayName = 'optimize:app';
optimizeApp.description = 'Perform scripts minification.';

gulp.task(optimizeApp);
