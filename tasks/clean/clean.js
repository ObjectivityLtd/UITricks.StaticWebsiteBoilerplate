import del from 'del';
import gulp from 'gulp';
import * as config from '@tasks/config';

/**
 * Task: clean
 */
export function clean() {
  return del(config.paths.dist);
}
clean.displayName = 'clean';
clean.description = 'Remove build output directory.';

gulp.task(clean);
