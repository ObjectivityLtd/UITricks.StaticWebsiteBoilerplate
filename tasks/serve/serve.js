import gulp from 'gulp';
import * as config from '@tasks/config';
import { argv, flags } from '@tasks/flags';
import { server } from '@tasks/server';
import { watch } from '@tasks/watch/watch';

function runServer(done) {
  server.init({
    server: config.paths.dist,
    host: argv['host'],
    port: argv['port'],
    open: argv['open'],
    ghostMode: argv['sync-browsers'],
    codeSync: argv['live-reload'],
    notify: false
  });

  done();
}

/**
 * Task: serve
 */
export const serve = gulp.parallel(
  runServer,
  watch
);
serve.displayName = 'serve';
serve.description = 'Run application server for development.';
serve.flags = {
  '--host': flags['host'].description,
  '--port': flags['port'].description,
  '--open': flags['open'].description,
  '--sync-browsers': flags['sync-browsers'].description,
  '--live-reload': flags['live-reload'].description
};

gulp.task(serve);
