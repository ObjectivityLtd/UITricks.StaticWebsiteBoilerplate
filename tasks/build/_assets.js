import gulp from 'gulp';
import * as config from '@tasks/config';
import { cleanAssets } from '@tasks/clean/_assets';

export function isCustomCopyPath(path) {
  return path instanceof Object;
}

function copyToBuild() {
  const filesToCopy = config.assets.filter(asset => {
    return !isCustomCopyPath(asset);
  });

  return gulp.src(filesToCopy)
    .pipe(gulp.dest(config.paths.dist));
}

function generateCustomCopyTasks() {
  const filesToCopy = config.assets.filter(asset => {
    return isCustomCopyPath(asset);
  });

  return filesToCopy.map(asset => {
    return function copyToCustomPath() {
      return gulp.src(asset.src, { base: asset.base })
        .pipe(gulp.dest(asset.dest || config.paths.dist));
    };
  });
}

const copyToCustomPaths = generateCustomCopyTasks();
const copyAllAssets = gulp.parallel(copyToBuild, copyToCustomPaths);

/**
 * Task: build:assets
 */
export const buildAssets = gulp.series(
  cleanAssets,
  copyAllAssets
);
buildAssets.displayName = 'build:assets';
buildAssets.description = 'Copy static assets like fonts, images, icons, favicon, web.config etc.';

gulp.task(buildAssets);
