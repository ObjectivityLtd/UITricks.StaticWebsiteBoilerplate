import gulp from 'gulp';
import connect from 'gulp-connect';
import minimist from 'minimist';
import * as config from '../config';

function getFlags() {
  const knownFlags = {
    string: 'host',
    number: 'port',
    boolean: 'livereload',
    default: {
      host: config.serve.host,
      port: config.serve.port,
      livereload: config.serve.livereload
    }
  };

  return minimist(process.argv.slice(2), knownFlags);
}

/**
 * Task: serve
 */
function serve() {
  const flags = getFlags();

  connect.server({
    root: 'build',
    host: flags.host,
    port: flags.port,
    livereload: flags.livereload
  });
}
serve.description = 'Run application server for development.';
serve.flags = {
  '--host': `Hostname used to run the server (default: ${config.serve.host})`,
  '--port': `Port used to run the server (default: ${config.serve.port}).`,
  '--livereload': `Live reload on file changes (default: ${config.serve.livereload ? 'enabled' : 'disabled'})`
};

gulp.task(serve);

export default serve;
