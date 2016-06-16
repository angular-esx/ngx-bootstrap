var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');

function _ngxWindowService() {
  this.constructor = function ngxWindowService() {
    this.window = window;
    this.document = window.document;
  };
}

module.exports = ng.core.Class(new _ngxWindowService());