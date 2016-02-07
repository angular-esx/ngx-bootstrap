(function (ngxBootstrap) {
  var _configs = ngxBootstrap.configs = {};
  _configs.fileService = new (function () {
    this.ROOT = '/';
    this.COMPONENTS = this.ROOT + 'components/';

    this.getComponentTemplate = function (componentName, templateName) {
      if (!templateName) { templateName = componentName + '.component.html'; }

      return this.COMPONENTS + componentName + '/templates/' +  templateName;
    };
    this.getTestCaseTemplate = function (componentName, testcase) {
      if (!testcase) { testcase = 'isolated-components'; }

      return this.COMPONENTS + componentName + '/tests/ui/' + testcase + '/test-case.html';
    };
  })();

  ngxBootstrap.ngxClass = {};
  ngxBootstrap.ngxComponents = {};

  /*Utils*/
  ngxBootstrap.shallowCopy = function (target, source, overrideTarget) {
    for (var prop in source) {
      if (!target[prop] || (target[prop] && overrideTarget)) {
        target[prop] = source[prop];
      }
    }

    return target;
  };

})(window.ngxBootstrap || (window.ngxBootstrap = {}))