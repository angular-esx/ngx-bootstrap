var ngxBasePortalClass = ng.core.Class(new _ngxBasePortalClass());

function _ngxBasePortalClass() {
  this.constructor = function ngxBasePortalClass() { };

  this.isAttached = function () {
    return !ngx.isNull(this.attachedHost);
  };

  this.attach = function(host) {
    if (ngx.isNull(host)) {
      throw 'Portal host is required';
    }

    if (host.hasAttached()) {
      throw 'Portal host has already been attached';
    }

    this.attachedHost = host;

    return host.attach(this);
  };

  this.detach = function () {
    if (ngx.isNull(this.attachedHost)) {
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
  componentPortalClass: ng.core.Class(new _ngxComponentPortalClass()),
  templatePortalClass: ng.core.Class(new _ngxTemplatePortalClass()),
};