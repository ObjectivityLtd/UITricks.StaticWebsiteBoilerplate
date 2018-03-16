import fs from 'fs';
import path from 'path';
import * as config from '@tasks/config';
import { argv } from '@tasks/flags';

export const environments = Object.keys(config.environments);
export const defaultEnvironment = getDefaultEnvironment();

export function getEnvironmentFilename() {
  return config.environments[argv['env']];
}

export function getEnvironmentData() {
  const filename = getEnvironmentFilename();
  const filePath = path.join(__dirname, `../${config.paths.src}/environments/${filename}`);
  const data = fs.readFileSync(filePath, 'utf8');

  return JSON.parse(data);
}

function getDefaultEnvironment() {
  if (environments.length === 0) {
    throw new Error('Add at least one environment in config.json.');
  }

  return environments[0]
}
