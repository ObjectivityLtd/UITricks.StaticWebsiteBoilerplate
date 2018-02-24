import gulp from 'gulp';
import * as config from '@tasks/config';
import { buildViews } from '@tasks/build/_views';
import { reloadServer } from '@tasks/serve/_reload';

function rebuildOnChange() {
  const pathsToWatch = [
    `${config.paths.src}/environments/**/*.json`,
    `${config.paths.src}/views/**/*.njk`
  ];

  gulp.watch(pathsToWatch, gulp.series(buildViews, reloadServer));
}

/**
 * Task: watch:views
 */
export const watchViews = gulp.series(
  buildViews,
  rebuildOnChange
);
watchViews.displayName = 'watch:views';
watchViews.description = 'Recompile nunjucks templates on change.';

gulp.task(watchViews);
