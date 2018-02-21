import gulp from 'gulp';
import buildViews from '../build/_views';
import reloadServer from '../serve/_reload';
import * as config from '../config';

function rebuildOnChange() {
  gulp.watch(['src/views/**/*.njk', 'src/environments/env.json'], gulp.series(buildViews, reloadServer));
}

/**
 * Task: watch:views
 */
const watchViews = gulp.series(
  buildViews,
  rebuildOnChange
);
watchViews.displayName = 'watch:views';
watchViews.description = 'Recompile nunjucks templates on change.';

gulp.task(watchViews);

export default watchViews;
