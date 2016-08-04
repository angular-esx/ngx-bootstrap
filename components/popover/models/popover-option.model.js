import * as ngCore from '@angular/core';
import { ngxUtils } from '../../../cores';

function _ngxPopoverOption() {
  var _PROPERTIES = ['hostElement', 'templateRef', 'title', 'content', 'state', 'position', 'delay'];

  this.constructor = [
    [new ngCore.Optional(), null],

    function ngxPopoverOption(options) {
      if (options) { this.assign(this, options); }
    }
  ];

  this.assign = function (target, options) {
    ngxUtils.shallowCopy(target, (options || this), false, function (prop) {
      return _PROPERTIES.indexOf(prop) > -1;
    });
  };
}

export var ngxPopoverOption = ngCore.Class(new _ngxPopoverOption());