import gulp from 'gulp';
import nunjucks from 'gulp-nunjucks-render';
import * as config from '@tasks/config';
import { getEnvironmentData } from '@tasks/environment';
import { targetDevelopment } from '@tasks/target';
import { cleanViews } from '@tasks/clean/_views';
import { optimizeViews } from '@tasks/optimize/_views';

function compileViews() {
  const options = {
    data: getEnvironmentData(),
    path: [
      `${config.paths.src}/assets`,
      `${config.paths.src}/views`
    ]
  };

  return gulp.src(`${config.paths.src}/views/pages/**/*.njk`)
    .pipe(nunjucks(options))
    .pipe(gulp.dest(config.paths.dist));
}

function targetBuild(done) {
  if (targetDevelopment()) {
    return done();
  }

  return optimizeViews();
}

/**
 * Task: build:views
 */
export const buildViews = gulp.series(
  cleanViews,
  compileViews,
  targetBuild
);
buildViews.displayName = 'build:views';
buildViews.description = 'Compile nunjucks templates to HTML.';

gulp.task(buildViews);
