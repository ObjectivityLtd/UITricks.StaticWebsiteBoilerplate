import yargs from 'yargs';
import * as config from '@tasks/config';

export const flags = {
  'host': {
    alias: 'h',
    description: 'Hostname used to run the server.',
    type: 'string',
    requiresArg: true,
    default: config.server.host
  },
  'port': {
    alias: 'p',
    description: 'Port used to run the server.',
    type: 'number',
    requiresArg: true,
    default: config.server.port
  },
  'open': {
    alias: 'o',
    description: 'Open application in default browser.',
    type: 'boolean',
    default: config.server.openBrowser
  },
  'sync-browsers': {
    description: 'Sync activities like clicks, scroll and form inputs across browsers.',
    type: 'boolean',
    default: config.server.syncBrowsers
  },
  'live-reload': {
    description: 'Live reload browser on file change.',
    type: 'boolean',
    default: config.server.liveReload
  },
  'target': {
    description: 'Specify the build target (development or production with all optimizations enabled).',
    type: 'string',
    requiresArg: true,
    choices: ['dev', 'prod'],
    default: 'dev'
  },
  'env': {
    description: 'Specify environment file to be used for build process.',
    type: 'string',
    requiresArg: true,
    default: 'dev'
  },
  'prod': {
    description: 'Apply all build optimizations and use production environment file (equivalent of gulp build --target=prod --env=prod).',
    type: 'boolean',
    default: true
  },
};

export const argv = yargs.options(flags).argv;
