var ngxPortalClasses = require('./classes/portal.class.js');
var ngxPortalHostClasses = require('./classes/portal-host.class.js');

function _ngxTemplatePortalDirective() {
  var _base;

  this.extends = ngxPortalClasses.templatePortalClass;

  this.constructor = [
    ng.core.TemplateRef,
    ng.core.ViewContainerRef,

    function ngxTemplatePortalDirective(templateRef, viewContainerRef) {
      ngxPortalClasses.templatePortalClass.apply(this, arguments);
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxPortalClasses.templatePortalClass); }
    return _base;
  }
}

function _ngxPortalHostDirective() {
  var _base;

  this.extends = ngxPortalHostClasses.basePortalHostClass;

  this.constructor = [
    ng.core.ComponentResolver,
    ng.core.ViewContainerRef,

    function ngxTemplatePortalDirective(componentResolver, viewContainerRef) {
      ngxPortalHostClasses.basePortalHostClass.apply(this, arguments);

      this.componentResolver = componentResolver;
      this.viewContainerRef = viewContainerRef;
    }
  ];

  this.ngAfterContentInit = function () {
    var _self = this,
        _setPortal = this.hasAttached() ? this.detach() : Promise.resolve(null);

    _setPortal.then(function() {
      if (_self.portal) { _self.attach(_self.portal); }
    });
  };

  this.attachComponentPortal = function (portal) {
    portal.attachedHost = this;

    var _self = this,
        _viewContainerRef = ngx.isNull(portal.viewContainerRef) ? this.viewContainerRef : portal.viewContainerRef;

    return this.componentResolver.resolveComponent(portal.component)
      .then(function (componentFactory) {
        var _componentRef = _viewContainerRef.createComponent
        (
          componentFactory,
          _viewContainerRef.length,
          portal.injector || _viewContainerRef.parentInjector
        );

        _self.dispose = function () { _componentRef.destroy(); };

        return _componentRef;
      });
  };

  this.attachTemplatePortal = function(portal) {
    portal.attachedHost = this;

    this.viewContainerRef.createEmbeddedView(portal.templateRef);

    this.dispose = function () { this.viewContainerRef.clear(); };

    return Promise.resolve(this.attachedPortal.locals);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxPortalHostClasses.basePortalHostClass); }
    return _base;
  }
}

module.exports = {
  templatePortalDirective: ng.core.Directive({
    selector: '[ngx-portal]'
  })
  .Class(new _ngxTemplatePortalDirective()),

  portalHostDirective: ng.core.Directive({
    selector: '[ngx-portal-host]',
    properties: ['portal: ngx-portal-host']
  })
  .Class(new _ngxPortalHostDirective())
};