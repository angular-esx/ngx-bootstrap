var ngCore = require('@angular/core/index.js');

function _popoverOptionClass() {
  var _PROPERTIES = ['hostElement', 'templateRef', 'title', 'content', 'state', 'position', 'delay'];

  this.constructor = [
    [new ngCore.Optional(), null],

    function popoverOptionClass(options) {
      if (options) { this.assign(this, options); }
    }
  ];

  this.assign = function (target, options) {
    ngx.shallowCopy(target, (options || this), false, function (prop) {
      return _PROPERTIES.indexOf(prop) > -1;
    });
  };
}

module.exports = ngCore.Class(new _popoverOptionClass());