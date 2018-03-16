import { argv } from '@tasks/flags';

export const target = {
  dev: 'dev',
  prod: 'prod'
};

export const targets = Object.values(target);
export const defaultTarget = target.dev;

export function targetDevelopment() {
  return argv['target'] === target.dev;
}

export function targetProduction() {
  return argv['target'] === target.prod;
}
