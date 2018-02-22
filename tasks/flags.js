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
    alias: 's',
    description: 'Sync activities like clicks, scroll and form inputs across browsers.',
    type: 'boolean',
    default: config.server.syncBrowsers
  },
  'live-reload': {
    alias: 'lr',
    description: 'Live reload on file changes.',
    type: 'boolean',
    default: config.server.liveReload
  },
  'prod': {
    description: '',
    type: 'boolean',
    default: false
  }
};

export const argv = yargs.options(flags).argv;
