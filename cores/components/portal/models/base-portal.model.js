import * as ngCore from '@angular/core';
import * as ngxUtils from '../../../utils';


function _ngxBasePortal() {
  this.constructor = function ngxBasePortal() { };

  this.isAttached = function () {
    return !ngxUtils.isNull(this.attachedHost);
  };

  this.attach = function(host) {
    if (ngxUtils.isNull(host)) {
      throw 'Portal host is required';
    }

    if (host.hasAttached()) {
      throw 'Portal host has already been attached';
    }

    this.attachedHost = host;

    return host.attach(this);
  };

  this.detach = function () {
    if (ngxUtils.isNull(this.attachedHost)) {
      throw 'Not found portal host';
    }

    this.attachedHost = null;

    return host.detach();
  };
}


export var ngxBasePortal = ngCore.Class(new _ngxBasePortal());