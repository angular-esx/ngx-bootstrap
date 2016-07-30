var ngCore = require('@angular/core/index.js');
var ngxUtil = require('../../../utils.js');

var ngxBasePortalClass = ngCore.Class(new _ngxBasePortalClass());

function _ngxBasePortalClass() {
  this.constructor = function ngxBasePortalClass() { };

  this.isAttached = function () {
    return !ngxUtil.isNull(this.attachedHost);
  };

  this.attach = function(host) {
    if (ngxUtil.isNull(host)) {
      throw 'Portal host is required';
    }

    if (host.hasAttached()) {
      throw 'Portal host has already been attached';
    }

    this.attachedHost = host;

    return host.attach(this);
  };

  this.detach = function () {
    if (ngxUtil.isNull(this.attachedHost)) {
      throw 'Not found portal host';
    }

    this.attachedHost = null;

    return host.detach();
  };
}

function _ngxComponentPortalClass() {
  var _base;

  this.extends = ngxBasePortalClass;

  this.constructor = function ngxComponentPortalClass(component, viewContainerRef, injector) {
    ngxBasePortalClass.apply(this, arguments);

    this.component = component;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBasePortalClass); }
    return _base;
  }
}

function _ngxTemplatePortalClass() {
  var _base;

  this.extends = ngxBasePortalClass;

  this.constructor = function ngxTemplatePortalClass(templateRef, viewContainerRef) {
    ngxBasePortalClass.apply(this, arguments);

    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
  };

  this.attach = function(host, locals) {
    this.locals = locals || {};

    return _getBaseInstance(this).attach.apply(this, [host]);
  };

  this.detach = function() {
    this.locals = {};

    return _getBaseInstance(this).detach.apply(this, [host]);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBasePortalClass); }
    return _base;
  }
}

module.exports = {
  basePortalClass: ngxBasePortalClass,
  componentPortalClass: ngCore.Class(new _ngxComponentPortalClass()),
  templatePortalClass: ngCore.Class(new _ngxTemplatePortalClass()),
};