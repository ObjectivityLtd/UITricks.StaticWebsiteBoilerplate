import gulp from 'gulp';
import * as config from '@tasks/config';

function isCustomCopyPath(path) {
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

/**
 * Task: build:assets
 */
const buildAssets = gulp.parallel(
  copyToBuild,
  copyToCustomPaths
);
buildAssets.displayName = 'build:assets';
buildAssets.description = 'Copy static assets like fonts, images, icons, favicon etc.';

gulp.task(buildAssets);

export default buildAssets;
