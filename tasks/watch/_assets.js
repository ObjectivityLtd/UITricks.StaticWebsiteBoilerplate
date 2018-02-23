import gulp from 'gulp';
import * as config from '@tasks/config';
import { buildAssets, isCustomCopyPath } from '@tasks/build/_assets';
import { reloadServer } from '@tasks/serve/_reload';

function rebuildOnChange() {
  const pathsToWatch = config.assets.map(asset => {
    return isCustomCopyPath(asset) ? asset.src : asset;
  });

  gulp.watch(pathsToWatch, gulp.series(buildAssets, reloadServer));
}

/**
 * Task: watch:assets
 */
export const watchAssets = gulp.series(
  buildAssets,
  rebuildOnChange
);
watchAssets.displayName = 'watch:assets';
watchAssets.description = 'Update static assets on change.';

gulp.task(watchAssets);
