import * as config from '@tasks/config';

export const target = {
  dev: 'dev',
  prod: 'prod'
};

export const environments = Object.keys(config.environments);
export const targets = Object.values(target);
