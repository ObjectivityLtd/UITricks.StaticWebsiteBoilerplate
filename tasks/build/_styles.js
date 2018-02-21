import gulp from 'gulp';
import sass from 'gulp-sass';
import * as config from '@tasks/config';

/**
 * Task: build:styles
 */
export function buildStyles() {
  return gulp.src(`${config.paths.src}/styles/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(`${config.paths.dist}/styles`));
}
buildStyles.displayName = 'build:styles';
buildStyles.description = 'Compile Sass files to CSS.';

gulp.task(buildStyles);
