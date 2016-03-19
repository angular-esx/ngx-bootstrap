(function (ngxBootstrap) {
  var _configs = ngxBootstrap.configs = {};
  _configs.fileService = (function () {
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
    this.getComponentStyle = function (componentName, styleName) {
      if (!styleName) { styleName = componentName; }

      return this.COMPONENTS + componentName + '/css/' +  styleName + '.css';
    };
  })();

  ngxBootstrap.ngxClass = {};
  ngxBootstrap.ngxCores = {};
  ngxBootstrap.ngxComponents = {};

})(window.ngxBootstrap || (window.ngxBootstrap = {}));