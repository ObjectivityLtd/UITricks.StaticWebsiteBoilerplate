import del from 'del';
import gulp from 'gulp';
import * as config from '@tasks/config';

/**
 * Task: clean:app
 */
export function cleanApp() {
  return del(`${config.paths.dist}/app`);
}
cleanApp.displayName = 'clean:app';
cleanApp.description = 'Clean application scripts from build output directory.';

gulp.task(cleanApp);
