import gulp from 'gulp';
import * as config from '@tasks/config';
import { buildApp } from '@tasks/build/_app';
import { reloadServer } from '@tasks/serve/_reload';

function rebuildOnChange() {
  gulp.watch(`${config.paths.src}/app/**/*.js`, gulp.series(buildApp, reloadServer));
}

/**
 * Task: watch:app
 */
export const watchApp = gulp.series(
  buildApp,
  rebuildOnChange
);
watchApp.displayName = 'watch:app';
watchApp.description = 'Rebuild application scripts on change.';

gulp.task(watchApp);
