import gulp from 'gulp';
import * as config from '@tasks/config';
import buildAssets from '@tasks/build/_assets';

function rebuildOnChange() {

}

/**
 * Task: watch:assets
 */
const watchAssets = gulp.series(
  buildAssets,
  rebuildOnChange
);
watchAssets.displayName = 'watch:assets';
watchAssets.description = '';

gulp.task(watchAssets);

export default watchAssets;
