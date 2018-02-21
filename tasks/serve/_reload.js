import gulp from 'gulp';
import { server } from '@tasks/server';

/**
 * Task: serve:reload
 */
export function reloadServer(done) {
  server.reload();
  done();
}
reloadServer.displayName = 'serve:reload';
reloadServer.description = '';

gulp.task('serve:reload', reloadServer);
