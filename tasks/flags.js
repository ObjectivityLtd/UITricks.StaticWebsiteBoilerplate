import yargs from 'yargs';
import * as config from '@tasks/config';
import { environments, targets } from '@tasks/constants';

const group = {
  server: 'Server:',
  build: 'Build:'
};

export const flags = {
  'host': {
    alias: 'h',
    description: 'Hostname used to run the server.',
    type: 'string',
    group: group.server,
    requiresArg: true,
    default: config.server.host
  },
  'port': {
    alias: 'p',
    description: 'Port used to run the server.',
    type: 'number',
    group: group.server,
    requiresArg: true,
    default: config.server.port
  },
  'open': {
    alias: 'o',
    description: 'Open application in default browser.',
    type: 'boolean',
    group: group.server,
    default: config.server.openBrowser
  },
  'sync-browsers': {
    description: 'Sync activities like clicks, scroll and form inputs across browsers.',
    type: 'boolean',
    group: group.server,
    default: config.server.syncBrowsers
  },
  'live-reload': {
    description: 'Live reload browser on file change.',
    type: 'boolean',
    group: group.server,
    default: config.server.liveReload
  },
  'target': {
    description: 'Specify the build target (development or production with all optimizations enabled).',
    type: 'string',
    group: group.build,
    requiresArg: true,
    choices: targets,
    default: config.defaultTarget
  },
  'env': {
    description: 'Specify environment file to be used for build process.',
    type: 'string',
    group: group.build,
    requiresArg: true,
    choices: environments,
    default: config.defaultEnvironment
  },
  'prod': {
    description: 'Apply all build optimizations and use production environment file (equivalent of gulp build --target=prod --env=prod).',
    type: 'boolean',
    group: group.build,
    default: true
  },
};

export const argv = yargs.options(flags).argv;
