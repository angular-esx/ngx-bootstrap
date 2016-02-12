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
        INDEX_TEMPLATE_HTML: paths.ROOT + 'index.template.html',
        NGX_BOOTSTRAP_JS: paths.ROOT + 'ngx-bootstrap.js',
        COMPONENTS_INFO_JSON: paths.COMPONENTS + 'components.info.json',
        NGX_BOOTSTRAP_UTILS_JS: paths.ROOT + 'ngx-bootstrap.utils.js',
        NGX_BOOTSTRAP_CSS: paths.ROOT + 'dist/css/ngx-bootstrap.css'
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

    this.getComponentInfos = function (componentName) {
      if (!componentName) { componentName = '*'; }

      return this.PATHS.COMPONENTS + componentName + '/*.info.json';
    };
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
    this.ORDER_DEPENDENCIES = 'order-dependencies';
    this.SERVE = 'serve';
    this.SASS = 'sass';
    this.TEST_UI = 'test-ui';
  })();

  var gulp = require('gulp');
  var yargs = require('yargs');
  var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'stream-series', 'jsoncombine'],
    replaceString: /\bgulp[\-.]/
  });

  gulp.task('order-dependencies', getTask(taskService.ORDER_DEPENDENCIES));

  gulp.task('test-ui', [taskService.ORDER_DEPENDENCIES], getTask(taskService.TEST_UI));
  
  gulp.task('serve', ['sass'], getTask(taskService.SERVE))

  gulp.task('sass', getTask(taskService.SASS));

  function getTask(task) {
    return require(fileService.PATHS.GULP_TASKS + task)({
      gulp: gulp,
      plugins: plugins,
      fileService: fileService,
      args: yargs.argv
    });
  }

})();