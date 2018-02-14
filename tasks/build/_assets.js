import gulp from 'gulp';
import * as config from '../config';

function copyAssets() {
  return config.assets.map(asset => {
    if (asset instanceof Object) {
      return gulp.src(asset.src, { base: asset.base })
        .pipe(gulp.dest(asset.dest || 'build'));
    }

    return gulp.src(asset)
      .pipe(gulp.dest('build'));
  });
}

/**
 * Task: build:assets
 */
const buildAssets = gulp.parallel(
  copyAssets
);
buildAssets.displayName = 'build:assets';
buildAssets.description = 'Copy static assets like fonts, images, icons, favicon etc.';

gulp.task(buildAssets);

export default buildAssets;
