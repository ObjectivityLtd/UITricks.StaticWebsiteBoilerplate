import fs from 'fs';
import gulp from 'gulp';
import nunjucks from 'gulp-nunjucks-render';
import path from 'path';
import * as config from '../config';

function readEnvironmentData() {
  const filePath = path.join(__dirname, '../../src/environments/env.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return data;
}

/**
 * Task: build:views
 */
function buildViews() {
  const compileOptions = {
    data: readEnvironmentData(),
    path: [
      'src/assets/icons',
      'src/views'
    ]
  };

  return gulp.src('src/views/pages/**/*.njk')
    .pipe(nunjucks(compileOptions))
    .pipe(gulp.dest('build'));
}
buildViews.displayName = 'build:views';
buildViews.description = 'Compile nunjucks templates to HTML.';

gulp.task(buildViews);

export default buildViews;
