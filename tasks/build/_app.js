import del from 'del';
import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import vinylPaths from 'vinyl-paths';
import * as config from '@tasks/config';
import { targetProduction } from '@tasks/target';
import { cleanApp } from '@tasks/clean/_app';
import { optimizeApp } from '@tasks/optimize/_app';

const app = {
  vendor: 'app.vendor.js',
  local: 'app.local.js',
  bundle: 'app.bundle.js'
};

function buildVendorScripts() {
  return gulp.src(config.scripts.vendor)
    .pipe(concat(app.vendor))
    .pipe(gulp.dest(`${config.paths.dist}/app`));
}

function buildLocalScripts() {
  return gulp.src(config.scripts.local)
    .pipe(concat(app.local))
    .pipe(babel())
    .pipe(gulp.dest(`${config.paths.dist}/app`));
}

function mergeAllScripts() {
  const filesToMerge = [
    `${config.paths.dist}/app/${app.vendor}`,
    `${config.paths.dist}/app/${app.local}`
  ];

  return gulp.src(filesToMerge)
    .pipe(vinylPaths(del))
    .pipe(concat(app.bundle))
    .pipe(gulp.dest(`${config.paths.dist}/app`));
}

function targetBuild(done) {
  if (!targetProduction()) {
    return done();
  }

  return optimizeApp();
}

const buildAllScripts = gulp.parallel(buildVendorScripts, buildLocalScripts);

/**
 * Task: build:app
 */
export const buildApp = gulp.series(
  cleanApp,
  buildAllScripts,
  mergeAllScripts,
  targetBuild
);
buildApp.displayName = 'build:app';
buildApp.description = 'Build application scripts.';

gulp.task(buildApp);
