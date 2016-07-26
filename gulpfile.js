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

      _paths.ZONE = _paths.NODE_MODULES + 'zone.js/dist/';
      _paths.REFLECT = _paths.NODE_MODULES + 'reflect-metadata/';
      _paths.RX = _paths.NODE_MODULES + 'rxjs/bundles/';
      _paths.CORE_ANGULAR = _paths.NODE_MODULES + '@angular/core/bundles/';
      _paths.COMMON_ANGULAR = _paths.NODE_MODULES + '@angular/common/bundles/';
      _paths.CORE_ANGULAR = _paths.NODE_MODULES + '@angular/core/bundles/';
      _paths.COMPILER_ANGULAR = _paths.NODE_MODULES + '@angular/compiler/bundles/';
      _paths.PLATFORM_BROWSER_ANGULAR = _paths.NODE_MODULES + '@angular/platform-browser/bundles/';
      _paths.PLATFORM_BROWSER_DYNAMIC_ANGULAR = _paths.NODE_MODULES + '@angular/platform-browser-dynamic/bundles/';

      
      _paths.ANGULAR_02 = _paths.NODE_MODULES + 'angular2/bundles/';
      _paths.BOOTSTRAP_04 = _paths.NODE_MODULES + 'bootstrap/dist/css/';
      _paths.ES6_SHAM = _paths.NODE_MODULES + 'es6-shim/';
      _paths.ES6_SHIM = _paths.NODE_MODULES + 'es6-shim/';

      return _paths;
    })();

    this.FILES = (function (paths) {
      return {
        INDEX_HTML: paths.ROOT + 'index.html',
        INDEX_TEMPLATE_HTML: paths.ROOT + 'index.template.html',
        NGX_BOOTSTRAP_JS: paths.ROOT + 'ngx-bootstrap.js',
        NGX_BOOTSTRAP_UTILS_JS: paths.ROOT + 'ngx-bootstrap.utils.js',
        NGX_NORMALIZE_CSS: paths.ROOT + 'dist/css/ngx-normalize.css',
        NGX_BOOTSTRAP_CSS: paths.ROOT + 'dist/css/ngx-bootstrap.css'
      };
    })(this.PATHS);

    this.LIBRARIES = (function (paths) {
      return {
        ES6_SHAM_JS: paths.ES6_SHAM + 'es6-sham.js',
        ES6_SHIM_JS: paths.ES6_SHIM + 'es6-shim.js',

        ZONE_JS: paths.ZONE + 'zone.js',
        REFLECT_JS: paths.REFLECT + 'Reflect.js',
        RX_JS: paths.RX + 'Rx.umd.js',
        CORE_ANGULAR_JS: paths.CORE_ANGULAR + 'core.umd.js',
        COMMON_ANGULAR_JS: paths.COMMON_ANGULAR + 'common.umd.js',
        COMPILER_ANGULAR_JS: paths.COMPILER_ANGULAR + 'compiler.umd.js',
        PLATFORM_BROWSER_ANGULAR_JS: paths.PLATFORM_BROWSER_ANGULAR + 'platform-browser.umd.js',
        PLATFORM_BROWSER_DYNAMIC_ANGULAR_JS: paths.PLATFORM_BROWSER_DYNAMIC_ANGULAR + 'platform-browser-dynamic.umd.js',
      };
    })(this.PATHS);

    this.getComponentTestCase = function (componentName, testCase) {
      if (!testCase) { testCase = 'isolated-components'; }

      var pathComponent = this.PATHS.COMPONENTS + componentName + '/tests/ui/' + testCase; 

      return {
        bootScript: pathComponent + '/boot.js',
        testCaseScript: pathComponent + '/test-case.js',
        dependenceScript: pathComponent + '/load-dependence.js'
      };
    };

    this.getDirectiveTestCase = function (directiveName, testCase) {
      if (!testCase) { testCase = 'isolated-directives'; }

      var pathComponent = this.PATHS.DIRECTIVES + directiveName + '/tests/ui/' + testCase;

      return {
        bootScript: pathComponent + '/boot.js',
        testCaseScript: pathComponent + '/test-case.js',
        dependenceScript: pathComponent + '/load-dependence.js'
      };
    };

  })();

  var taskService = new (function () {
    this.CLEAN = 'clean';
    this.WATCH = 'watch';
    this.BROWSER_SYNC = 'browser-sync';
    this.SCSS = 'scss';
    this.LINT = 'lint';
    this.INJECT_ASSETS = 'inject-assets';
    this.BUILD = 'build';
    this.WEBPACK = 'webpack';
    this.BUILD_SCSS = 'build-scss';
  })();

  var gulp = require('gulp');
  var yargs = require('yargs');
  var runSequence = require('run-sequence');
  var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'stream-series', 'jsoncombine', 'browser-sync', 'jshint-stylish', 'webpack-stream'],
    replaceString: /\bgulp[\-.]/
  });
  
  gulp.task('inject-assets', getTask(taskService.INJECT_ASSETS));
  
  gulp.task('test-ui', function(){
    runSequence('clean', 'serve', 'webpack', 'inject-assets');
  });
  
  gulp.task('default', ['build']);

  gulp.task('clean', getTask(taskService.CLEAN));

  gulp.task('serve', function () {
    runSequence('scss', 'lint', ['browserSync', 'watch']);
  });

  gulp.task('scss', getTask(taskService.SCSS));

  gulp.task('lint', getTask(taskService.LINT));

  gulp.task('webpack', getTask(taskService.WEBPACK));

  gulp.task('browserSync', getTask(taskService.BROWSER_SYNC));

  gulp.task('watch', getTask(taskService.WATCH));

  gulp.task('build', function () {
    runSequence('clean', 'scss', 'lint', 'webpack');
  });

  gulp.task('build-scss', getTask(taskService.BUILD_SCSS));

  function getTask(task) {
    return require(fileService.PATHS.GULP_TASKS + task)({
      gulp: gulp,
      plugins: plugins,
      fileService: fileService,
      args: yargs.argv
    });
  }

})();
