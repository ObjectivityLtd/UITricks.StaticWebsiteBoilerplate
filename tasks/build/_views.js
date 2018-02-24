import gulp from 'gulp';
import nunjucks from 'gulp-nunjucks-render';
import * as config from '@tasks/config';
import { getEnvironmentData } from "@tasks/environment";

/**
 * Task: build:views
 */
export function buildViews() {
  const options = {
    data: getEnvironmentData(),
    path: [
      `${config.paths.src}/assets/icons`,
      `${config.paths.src}/views`
    ]
  };

  return gulp.src(`${config.paths.src}/views/pages/**/*.njk`)
    .pipe(nunjucks(options))
    .pipe(gulp.dest(config.paths.dist));
}
buildViews.displayName = 'build:views';
buildViews.description = 'Compile nunjucks templates to HTML.';

gulp.task(buildViews);
