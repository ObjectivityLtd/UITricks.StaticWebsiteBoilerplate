import gulp from 'gulp';
import * as config from '@tasks/config';
import { buildAssets } from '@tasks/build/_assets';
import { reloadServer } from '@tasks/serve/_reload';

function rebuildOnChange() {

}

/**
 * Task: watch:assets
 */
export const watchAssets = gulp.series(
  buildAssets,
  rebuildOnChange
);
watchAssets.displayName = 'watch:assets';
watchAssets.description = '';

gulp.task(watchAssets);
