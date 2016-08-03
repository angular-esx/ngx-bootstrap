import * as ngCore from '@angular/core';
import * as ngxUtils from '../../utils';
import { ngxBasePortalHost } from './models/base-portal-host.model';


function _ngxPortalHostDirective() {
  var _base;

  this.extends = ngxBasePortalHost;

  this.constructor = [
    ngCore.ComponentResolver,
    ngCore.ViewContainerRef,

    function ngxPortalHostDirective(componentResolver, viewContainerRef) {
      ngxBasePortalHost.apply(this, arguments);

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
        _viewContainerRef = ngxUtils.isNull(portal.viewContainerRef) ? this.viewContainerRef : portal.viewContainerRef;

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
    if (!_base) { _base = context.getBaseInstance(ngxBasePortalHost); }
    return _base;
  }
}


export var ngxPortalHostDirective = ngCore.Directive({
  selector: '[ngx-portal-host]',
  properties: ['portal: ngx-portal-host']
})
.Class(new _ngxPortalHostDirective());