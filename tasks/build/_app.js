import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import * as config from '../config';

function buildVendorScripts() {
  return gulp.src(config.scripts.vendor)
    .pipe(concat('app.vendor.js'))
    .pipe(gulp.dest('build/app'));
}

function buildLocalScripts() {
  return gulp.src(config.scripts.local)
    .pipe(concat('app.local.js'))
    .pipe(babel())
    .pipe(gulp.dest('build/app'));
}

function mergeAllScripts() {
  const filesToMerge = [
    'build/app/app.vendor.js',
    'build/app/app.local.js'
  ];

  return gulp.src(filesToMerge)
    .pipe(concat('app.bundle.js'))
    .pipe(gulp.dest('build/app'));
}

/**
 * Task: build:app
 */
const buildApp = gulp.series(
  gulp.parallel(buildVendorScripts, buildLocalScripts),
  mergeAllScripts
);
buildApp.displayName = 'build:app';
buildApp.description = 'Build all application scripts.';

gulp.task(buildApp);

export default buildApp;
