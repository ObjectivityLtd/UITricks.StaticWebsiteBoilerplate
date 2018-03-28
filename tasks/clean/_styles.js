import del from 'del';
import gulp from 'gulp';
import * as config from '@tasks/config';

/**
 * Task: clean:styles
 */
export function cleanStyles() {
  return del(`${config.paths.dist}/styles`);
}
cleanStyles.displayName = 'clean:styles';
cleanStyles.description = 'Clean compiled styles from build output directory.';

gulp.task(cleanStyles);
