import gulp from 'gulp';
import buildApp from './_app';
import buildAssets from './_assets';
import buildStyles from './_styles';
import buildViews from './_views';

/**
 * Task: build
 */
const build = gulp.parallel(
  buildApp,
  buildAssets,
  buildStyles,
  buildViews
);
build.displayName = 'build';
build.description = 'Build application scripts, copy assets, compile Sass and views.';

gulp.task(build);

export default build;
