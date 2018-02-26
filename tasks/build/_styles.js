import gulp from 'gulp';
import sass from 'gulp-sass';
import tildeImporter from 'node-sass-tilde-importer';
import * as config from '@tasks/config';

/**
 * Task: build:styles
 */
export function buildStyles() {
  const options = {
    importer: tildeImporter
  };

  return gulp.src(`${config.paths.src}/styles/**/*.+(sass|scss)`)
    .pipe(sass(options).on('error', sass.logError))
    .pipe(gulp.dest(`${config.paths.dist}/styles`));
}
buildStyles.displayName = 'build:styles';
buildStyles.description = 'Compile Sass files to CSS.';

gulp.task(buildStyles);
