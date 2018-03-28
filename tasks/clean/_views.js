import del from 'del';
import gulp from 'gulp';
import * as config from '@tasks/config';

/**
 * Task: clean:views
 */
export function cleanViews() {
  return del(`${config.paths.dist}/*.html`);
}
cleanViews.displayName = 'clean:views';
cleanViews.description = 'Clean compiled views from build output directory.';

gulp.task(cleanViews);
