var ngxBootstrap = require('utils');

ngxBootstrap.coreService = require('coreService');  

var _configs = ngxBootstrap.configs = {};
_configs.fileService = new fileService();

ngxBootstrap.ngxCores = {};
ngxBootstrap.ngxComponents = {};

function fileService() {
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
}

module.exports = ngxBootstrap;