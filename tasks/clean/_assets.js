import del from 'del';
import gulp from 'gulp';
import * as config from '@tasks/config';

/**
 * Task: clean:assets
 */
export function cleanAssets() {
  return del(`${config.paths.dist}/assets`);
}
cleanAssets.displayName = 'clean:assets';
cleanAssets.description = 'Clean copied assets from build output directory.';

gulp.task(cleanAssets);
