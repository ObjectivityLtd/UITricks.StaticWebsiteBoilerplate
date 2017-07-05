module.exports = {
  /**
   *  Default web server configuration
   */
  serve: {
    path: 'build',
    port: 8080,
    livereload: true
  },

  /**
   * Temporary holder for scripts
   */
  scripts: [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
    'src/app/**/*.js'
  ]
};
