import gulp from 'gulp';
import watch from '../watch/watch'
import { flags, server } from '../../gulpfile.babel';
import * as config from '../config';

function runServer(done) {
  server.init({
    server: 'build',
    host: flags.host,
    port: flags.port,
    open: flags.open,
    ghostMode: flags.sync,
    codeSync: flags.livereload,
    notify: false,
  });

  done();
}

/**
 * Task: serve
 */
const serve = gulp.parallel(
  runServer,
  watch
);
serve.displayName = 'serve';
serve.description = 'Run application server for development.';
serve.flags = {
  '--host': `Hostname used to run the server (default: ${config.server.host})`,
  '--port': `Port used to run the server (default: ${config.server.port})`,
  '--open': `Open application in default browser (default: ${config.server.openBrowser})`,
  '--sync': `Sync activities like clicks, scroll and form inputs across browsers (default: ${config.server.syncBrowserActivities})`,
  '--livereload': `Live reload on file changes (default: ${config.server.livereload})`
};

gulp.task(serve);

export default serve;
