const config = require('../config.js');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

function buildAssets() {
  const assets = gulp.src('src/assets/**/*', { base: 'src/assets' })
    .pipe(gulp.dest('build/assets'))
    .pipe(plugins.connect.reload());

  const files = gulp.src(['src/favicon.ico', 'src/robots.txt' ])
    .pipe(gulp.dest('build'))
    .pipe(plugins.connect.reload());

  return plugins.merge(assets, files);
}
buildAssets.description = 'Copy static assets like icons or images.';

gulp.task('build:assets', buildAssets);
