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
reloadServer.description = 'Tell browser to reload the page.';

gulp.task('serve:reload', reloadServer);
