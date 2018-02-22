import gulp from 'gulp';
import { optimizeApp } from '@tasks/optimize/_app';
import { optimizeStyles } from '@tasks/optimize/_styles';
import { optimizeViews } from '@tasks/optimize/_views';

/**
 * Task: optimize
 */
export const optimize = gulp.parallel(
  optimizeApp,
  optimizeStyles,
  optimizeViews
);
optimize.displayName = 'optimize';
optimize.description = '';

gulp.task(optimize);
