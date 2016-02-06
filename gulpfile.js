(function () {
  var fileService = new (function () {
    this.PATHS = (function () {
      var _paths = {};
      _paths.ROOT = './';
      _paths.COMPONENTS = _paths.ROOT + 'components/';
      _paths.NODE_MODULES = _paths.ROOT + 'node_modules/';
      _paths.GULP_TASKS = _paths.ROOT + 'gulp-tasks/';

      _paths.ANGULAR_02 = _paths.NODE_MODULES + 'angular2/bundles/';
      _paths.BOOTSTRAP_04 = _paths.NODE_MODULES + 'bootstrap/dist/css/';
      _paths.ES6_SHIM = _paths.NODE_MODULES + 'es6-shim/';
      _paths.RX = _paths.NODE_MODULES + 'rxjs/bundles/';

      return _paths;
    })();

    this.FILES = (function (paths) {
      return {
        INDEX_HTML: paths.ROOT + 'index.html',
        NGX_BOOTSTRAP_JS: paths.ROOT + 'ngx-bootstrap.js'
      };
    })(this.PATHS);

    this.LIBRARIES = (function (paths) {
      return {
        ES6_SHIM_JS: paths.ES6_SHIM + 'es6-shim.js',
        RX_JS: paths.RX + 'Rx.umd.js',
        ANGULAR_02_POLYFILLS_JS: paths.ANGULAR_02 + 'angular2-polyfills.js',
        ANGULAR_02_JS: paths.ANGULAR_02 + 'angular2-all.umd.js',

        BOOTSTRAP_04_CSS: paths.BOOTSTRAP_04 + 'bootstrap.min.css'
      };
    })(this.PATHS);

    this.getComponentJS = function (componentName) {
      return this.PATHS.COMPONENTS + componentName + '/*.component.js';
    };
    this.getServiceJS = function (componentName) {
      return this.PATHS.COMPONENTS + componentName + '/services/*.service.js';
    };
    this.getTestCaseJS = function (componentName, testCase) {
      if (!testCase) { testCase = 'isolated-components'; }

      return this.PATHS.COMPONENTS + componentName + '/tests/ui/' + testCase + '/test-case.js';
    };
    this.getTestCaseBoot = function (componentName, testCase) {
      if (!testCase) { testCase = 'isolated-components'; }

      return this.PATHS.COMPONENTS + componentName + '/tests/ui/' + testCase + '/boot.js';
    };

  })();

  var taskService = new (function () {
    this.TEST_UI = 'test-ui';
  })();

  var gulp = require('gulp');
  var yargs = require('yargs');
  var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'stream-series'],
    replaceString: /\bgulp[\-.]/
  });

  gulp.task('test-ui', getTask(taskService.TEST_UI));

  function getTask(task) {
    return require(fileService.PATHS.GULP_TASKS + task)({
      gulp: gulp,
      plugins: plugins,
      fileService: fileService,
      args: yargs.argv
    });
  }

})();