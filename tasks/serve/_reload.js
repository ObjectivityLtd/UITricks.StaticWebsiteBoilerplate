import gulp from 'gulp';
import { server } from '@root/gulpfile.babel';

/**
 * Task: serve:reload
 */
function reloadServer(done) {
  server.reload();
  done();
}
reloadServer.displayName = 'serve:reload';
reloadServer.description = '';

gulp.task('serve:reload', reloadServer);

export default reloadServer;
