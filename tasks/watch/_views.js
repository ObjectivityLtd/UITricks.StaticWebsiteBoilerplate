import gulp from 'gulp';
import * as config from '@tasks/config';
import buildViews from '@tasks/build/_views';
import reloadServer from '@tasks/serve/_reload';

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
