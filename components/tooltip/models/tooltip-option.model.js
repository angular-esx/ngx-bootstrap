import * as ngCore from '@angular/core';
import ngxUtils from  '../../cores';

function _ngxTooltipOption() {
  var _PROPERTIES = ['hostElement', 'templateRef', 'content', 'state', 'position', 'delay', 'autoHide'];

  this.constructor = [
    [new ngCore.Optional(), null],

    function ngxTooltipOption(options) {
      if (options) { this.assign(this, options); }
    }
  ];

  this.assign = function (target, options) {
    ngxUtils.shallowCopy(target, (options || this), false, function (prop) {
      return _PROPERTIES.indexOf(prop) > -1;
    });
  };
}

export var ngxTooltipOption = ngCore.Class(new _ngxTooltipOption());