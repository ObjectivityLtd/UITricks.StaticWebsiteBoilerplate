import fs from 'fs';
import gulp from 'gulp';
import nunjucks from 'gulp-nunjucks-render';
import path from 'path';
import * as config from '@tasks/config';

function getEnvironmentData() {
  const filePath = path.join(__dirname, `../../${config.paths.src}/environments/env.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return data;
}

/**
 * Task: build:views
 */
function buildViews() {
  const compileOptions = {
    data: getEnvironmentData(),
    path: [
      `${config.paths.src}/assets/icons`,
      `${config.paths.src}/views`
    ]
  };

  return gulp.src(`${config.paths.src}/views/pages/**/*.njk`)
    .pipe(nunjucks(compileOptions))
    .pipe(gulp.dest(config.paths.dist));
}
buildViews.displayName = 'build:views';
buildViews.description = 'Compile nunjucks templates to HTML.';

gulp.task(buildViews);

export default buildViews;
