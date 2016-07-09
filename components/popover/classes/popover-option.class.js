var ngxBootstrap = require('ngxBootstrap');

function _popoverOptionClass() {
  var _PROPERTIES = ['hostElement', 'templateRef', 'title', 'content', 'state', 'position', 'delay'];

  this.constructor = [
    [new ng.core.Optional(), null],

    function popoverOptionClass(options) {
      if (options) { this.assign(this, options); }
    }
  ];

  this.assign = function (target, options) {
    ngxBootstrap.shallowCopy(target, (options || this), false, function (prop) {
      return _PROPERTIES.indexOf(prop) > -1;
    });
  };
}

module.exports = ng.core.Class(new _popoverOptionClass());