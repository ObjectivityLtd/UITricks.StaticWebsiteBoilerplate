import gulp from 'gulp';
import buildViews from '../build/_views';

/**
 * Task: watch:views
 */
function watchViews() {
  gulp.watch(['src/views/**/*.njk', 'src/environments/env.json'], gulp.parallel(buildViews));
}
watchViews.displayName = 'watch:views';
watchViews.description = 'Recompile nunjucks templates on changes.';

gulp.task(watchViews);

export default watchViews;
