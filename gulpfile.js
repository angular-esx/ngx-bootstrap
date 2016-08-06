(function () {
  var fileService = new (function () {
    this.PATHS = (function () {
      var _paths = {};
      _paths.ROOT = './';
      _paths.CORES = _paths.ROOT + 'cores/';
      _paths.COMPONENTS = _paths.ROOT + 'components/';
      _paths.DIRECTIVES = _paths.ROOT + 'directives/';
      _paths.NODE_MODULES = _paths.ROOT + 'node_modules/';
      _paths.GULP_TASKS = _paths.ROOT + 'gulp-tasks/';

      _paths.ES6_SHAM = _paths.NODE_MODULES + 'es6-shim/';
      _paths.ES6_SHIM = _paths.NODE_MODULES + 'es6-shim/';

      return _paths;
    })();

    this.FILES = (function (paths) {
      return {
        INDEX_HTML: paths.ROOT + 'index.html',
        INDEX_TEMPLATE_HTML: paths.ROOT + 'index.template.html',
        NGX_NORMALIZE_CSS: paths.ROOT + 'dist/css/ngx-normalize.css',
        NGX_BOOTSTRAP_CSS: paths.ROOT + 'dist/css/ngx-bootstrap.css',
        NGX_VENDORS_JS: paths.ROOT + 'dist/js/ngx-vendors.js',
        NGX_BOOTSTRAP_JS: paths.ROOT + 'dist/js/ngx-bootstrap.js',
        NGX_TEST_JS: paths.ROOT + 'dist/js/ngx-test.js'
      };
    })(this.PATHS);

    this.LIBRARIES = (function (paths) {
      return {
        ES6_SHAM_JS: paths.ES6_SHAM + 'es6-sham.js',
        ES6_SHIM_JS: paths.ES6_SHIM + 'es6-shim.js',
      };
    })(this.PATHS);

  })();

  var taskService = new (function () {
    this.CLEAN = 'clean';
    this.WATCH = 'watch';
    this.BROWSER_SYNC = 'browser-sync';
    this.SCSS = 'scss';
    this.JSHINT = 'jshint';
    this.INJECT_ASSETS = 'inject-assets';
    this.BUILD = 'build';
    this.WEBPACK = 'webpack-dev';
  })();

  var gulp = require('gulp');
  var yargs = require('yargs');
  var runSequence = require('run-sequence');
  var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'stream-series', 'jsoncombine', 'browser-sync', 'jshint-stylish', 'webpack-stream'],
    replaceString: /\bgulp[\-.]/
  });

  gulp.task('inject-assets', getTask(taskService.INJECT_ASSETS));

  gulp.task('test-ui', function () {
    runSequence('clean', 'scss', 'webpack', 'inject-assets', ['browserSync', 'watch', 'jshint']);
  });

  gulp.task('default', ['build']);

  gulp.task('clean', getTask(taskService.CLEAN));

  gulp.task('scss', getTask(taskService.SCSS));

  gulp.task('jshint', getTask(taskService.JSHINT));

  gulp.task('webpack', getTask(taskService.WEBPACK));

  gulp.task('browserSync', getTask(taskService.BROWSER_SYNC));

  gulp.task('watch', getTask(taskService.WATCH));

  gulp.task('build', function () {
    runSequence('clean', 'jshint', 'scss', 'webpack');
  });

  function getTask(task) {
    return require(fileService.PATHS.GULP_TASKS + task)({
      gulp: gulp,
      plugins: plugins,
      fileService: fileService,
      args: yargs.argv
    });
  }

})();
