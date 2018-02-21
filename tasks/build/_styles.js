import gulp from 'gulp';
import sass from 'gulp-sass';
import * as config from '@tasks/config';

/**
 * Task: build:styles
 */
function buildStyles() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/styles'));
}
buildStyles.displayName = 'build:styles';
buildStyles.description = 'Compile Sass files to CSS.';

gulp.task(buildStyles);

export default buildStyles;
