import gulp from 'gulp';
import * as config from '../config';

function isCustomCopyPath(path) {
  return path instanceof Object;
}

function copyToBuild() {
  const filesToCopy = config.assets.filter(asset => {
    return !isCustomCopyPath(asset);
  });

  return gulp.src(filesToCopy)
    .pipe(gulp.dest('build'));
}

const copyToCustomBuildPaths = function () {
  const filesToCopy = config.assets.filter(asset => {
    return isCustomCopyPath(asset);
  });

  return filesToCopy.map(asset => {
    return function copyToCustomBuildPath(done) {
      gulp.src(asset.src, { base: asset.base })
        .pipe(gulp.dest(asset.dest || 'build'));

      done();
    };
  });
}();

/**
 * Task: build:assets
 */
const buildAssets = gulp.parallel(
  copyToBuild,
  copyToCustomBuildPaths
);
buildAssets.displayName = 'build:assets';
buildAssets.description = 'Copy static assets like fonts, images, icons, favicon etc.';

gulp.task(buildAssets);

export default buildAssets;
