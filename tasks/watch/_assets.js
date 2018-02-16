import gulp from 'gulp';
import buildAssets from '../build/_assets';
import * as config from '../config';

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
