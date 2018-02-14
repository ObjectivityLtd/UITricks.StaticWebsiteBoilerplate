import gulp from 'gulp';
import nunjucks from 'gulp-nunjucks-render';
import * as config from '../config';

/**
 * Task: build:views
 */
function buildViews() {
  return gulp.src('src/views/pages/**/*.njk')
    .pipe(nunjucks({
      path: [
        'src/assets/icons',
        'src/views'
      ]
    }))
    .pipe(gulp.dest('build'));
}
buildViews.displayName = 'build:views';
buildViews.description = 'Compile nunjucks templates to HTML.';

gulp.task(buildViews);

export default buildViews;
