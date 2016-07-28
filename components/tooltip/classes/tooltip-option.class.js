var ngCore = require('@angular/core/index.js');

function _tooltipOptionClass() {
  var _PROPERTIES = ['hostElement', 'templateRef', 'content', 'state', 'position', 'delay', 'autoHide'];

  this.constructor = [
    [new ngCore.Optional(), null],

    function tooltipOptionClass(options) {
      if (options) { this.assign(this, options); }
    }
  ];

  this.assign = function (target, options) {
    ngx.shallowCopy(target, (options || this), false, function (prop) {
      return _PROPERTIES.indexOf(prop) > -1;
    });
  };
}

module.exports = ngCore.Class(new _tooltipOptionClass());