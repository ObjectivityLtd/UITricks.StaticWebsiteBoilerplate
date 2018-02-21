import browserSync from 'browser-sync';
import minimist from 'minimist';
import requireDir from 'require-dir';
import * as config from './tasks/config';

const tasksPath = 'tasks';
const tasksRequireOptions = { recurse: true };

const registeredFlags = {
  string: 'host',
  number: 'port',
  boolean: [
    'open',
    'sync',
    'livereload'
  ],

  alias: {
    h: 'host',
    p: 'port',
    o: 'open',
    s: 'sync',
    lr: 'livereload'
  },

  default: {
    host: config.server.host,
    port: config.server.port,
    open: config.server.openBrowser,
    sync: config.server.syncBrowserActivities,
    livereload: config.server.livereload
  }
};

export const tasks = requireDir(tasksPath, tasksRequireOptions);
export const flags = minimist(process.argv.slice(2), registeredFlags);
export const server = browserSync.create();
