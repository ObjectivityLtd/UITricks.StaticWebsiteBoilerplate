import fs from 'fs';
import path from 'path';
import * as config from '@tasks/config';
import { argv } from '@tasks/flags';

export function getEnvironmentFilename() {
  if (!isEnvironmentDefined(argv['env'])) {
    throw new Error(`Unknown environment '${argv['env']}'`);
  }

  return config.environments[argv['env']];
}

export function getEnvironmentData() {
  const filename = getEnvironmentFilename();
  const filePath = path.join(__dirname, `../${config.paths.src}/environments/${filename}`);
  const data = fs.readFileSync(filePath, 'utf8');

  return JSON.parse(data);
}

function isEnvironmentDefined(environmentName) {
  return config.environments.hasOwnProperty(environmentName);
}
