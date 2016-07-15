var ngxBootstrap = require('ngxBootstrap');

function _tooltipOptionClass() {
  var _PROPERTIES = ['hostElement', 'templateRef', 'content', 'state', 'position', 'delay', 'autoHide'];

  this.constructor = [
    [new ng.core.Optional(), null],

    function tooltipOptionClass(options) {
      if (options) { this.assign(this, options); }
    }
  ];

  this.assign = function (target, options) {
    ngxBootstrap.shallowCopy(target, (options || this), false, function (prop) {
      return _PROPERTIES.indexOf(prop) > -1;
    });
  };
}

module.exports = ng.core.Class(new _tooltipOptionClass());