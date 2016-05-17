(function() {
  var fileService = new(function() {
    this.PATHS = (function() {
      var _paths = {};
      _paths.ROOT = './';
      _paths.CORES = _paths.ROOT + 'cores/';
      _paths.COMPONENTS = _paths.ROOT + 'components/';
      _paths.DIRECTIVES = _paths.ROOT + 'directives/';
      _paths.NODE_MODULES = _paths.ROOT + 'node_modules/';
      _paths.GULP_TASKS = _paths.ROOT + 'gulp-tasks/';

      _paths.ANGULAR_02_CORE = _paths.NODE_MODULES + '@angular/core/';
      _paths.ANGULAR_02_COMMON = _paths.NODE_MODULES + '@angular/common/';
      _paths.ANGULAR_02_COMPILER = _paths.NODE_MODULES + '@angular/compiler/';
      _paths.ANGULAR_02_PLATFORM_BROWSER = _paths.NODE_MODULES + '@angular/platform-browser/';
      _paths.ANGULAR_02_PLATFORM_BROWSER_DYNAMIC = _paths.NODE_MODULES + '@angular/platform-browser-dynamic/';
      _paths.ANGULAR_02_PLATFORM_SERVER = _paths.NODE_MODULES + '@angular/platform-server/';

      _paths.BOOTSTRAP_04 = _paths.NODE_MODULES + 'bootstrap/dist/css/';
      _paths.ES6_SHIM = _paths.NODE_MODULES + 'es6-shim/';
      _paths.RX = _paths.NODE_MODULES + 'rxjs/bundles/';
      _paths.REFLECT_METADATA = _paths.NODE_MODULES + 'reflect-metadata/';
      _paths.ZONE = _paths.NODE_MODULES + 'zone.js/dist/';

      return _paths;
    })();

    this.FILES = (function(paths) {
      return {
        INDEX_HTML: paths.ROOT + 'index.html',
        INDEX_TEMPLATE_HTML: paths.ROOT + 'index.template.html',
        NGX_BOOTSTRAP_JS: paths.ROOT + 'ngx-bootstrap.js',
        NGX_BOOTSTRAP_UTILS_JS: paths.ROOT + 'ngx-bootstrap.utils.js',
        NGX_BOOTSTRAP_CSS: paths.ROOT + 'dist/css/ngx-bootstrap.css'
      };
    })(this.PATHS);

    this.LIBRARIES = (function(paths) {
      return {
        ES6_SHIM_JS: paths.ES6_SHIM + 'es6-shim.js',
        RX_JS: paths.RX + 'Rx.umd.js',
        REFLECT_METADATA_JS: paths.REFLECT_METADATA + 'Reflect.js',
        ZONE_JS: paths.ZONE + 'zone.min.js',
        
        ANGULAR_02_CORE: paths.ANGULAR_02_CORE + 'core.umd.js',
        ANGULAR_02_COMMON: paths.ANGULAR_02_COMMON + 'common.umd.js',
        ANGULAR_02_COMPILER: paths.ANGULAR_02_COMPILER + 'compiler.umd.js',
        ANGULAR_02_PLATFORM_BROWSER: paths.ANGULAR_02_PLATFORM_BROWSER + 'platform-browser.umd.js',
        ANGULAR_02_PLATFORM_BROWSER_DYNAMIC: paths.ANGULAR_02_PLATFORM_BROWSER_DYNAMIC + 'platform-browser-dynamic.umd.js',
        ANGULAR_02_PLATFORM_SERVER: paths.ANGULAR_02_PLATFORM_SERVER + 'platform-server.umd.js',

        BOOTSTRAP_04_CSS: paths.BOOTSTRAP_04 + 'bootstrap.min.css'
      };
    })(this.PATHS);

    this.getComponentTestCaseBoot = function(componentName, testCase) {
      if (!testCase) { testCase = 'isolated-components'; }

      return this.PATHS.COMPONENTS + componentName + '/tests/ui/' + testCase + '/boot.js';
    };

    this.getDirectiveTestCaseBoot = function (directiveName, testCase) {
      if (!testCase) { testCase = 'isolated-directives'; }

      return this.PATHS.DIRECTIVES + directiveName + '/tests/ui/' + testCase + '/boot.js';
    };
    
  })();

  var taskService = new(function() {
    this.WATCH = 'watch';
    this.BROWSER_SYNC = 'browser-sync';
    this.SCSS = 'scss';
    this.LINT = 'lint';
    this.TEST_UI = 'test-ui';
    this.BUILD = 'build';
    this.BUNDLE = 'bundle';
    this.WEBPACK = 'webpack';
  })();

  var gulp = require('gulp');
  var yargs = require('yargs');
  var runSequence = require('run-sequence');
  var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'stream-series', 'jsoncombine', 'browser-sync', 'jshint-stylish', 'webpack-stream'],
    replaceString: /\bgulp[\-.]/
  });

  gulp.task('test-ui', ['serve', 'webpack'], getTask(taskService.TEST_UI));

  gulp.task('default', ['serve']);

  gulp.task('serve', function() {
    runSequence('scss', 'lint', ['browserSync', 'watch']);
  });
  
  gulp.task('scss', getTask(taskService.SCSS));

  gulp.task('lint', getTask(taskService.LINT));
  
  gulp.task('webpack', getTask(taskService.WEBPACK));

  gulp.task('browserSync', getTask(taskService.BROWSER_SYNC));

  gulp.task('watch', getTask(taskService.WATCH));
  
  gulp.task('build', getTask(taskService.BUILD));
  
  gulp.task('bundle', getTask(taskService.BUNDLE));

  function getTask(task) {
    return require(fileService.PATHS.GULP_TASKS + task)({
      gulp: gulp,
      plugins: plugins,
      fileService: fileService,
      args: yargs.argv
    });
  }

})();
