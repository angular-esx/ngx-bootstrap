var ngxBootstrap = require('utils');

function _ngxWindowService() {
  this.constructor = function ngxWindowService() {
    this.window = window;
    this.document = window.document;
  };
}

module.exports = ng.core.Class(new _ngxWindowService());