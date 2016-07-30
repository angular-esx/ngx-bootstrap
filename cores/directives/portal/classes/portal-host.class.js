var ngCore = require('@angular/core/index.js');
var ngxUtil = require('../../../utils.js');

var ngxPortalClasses = require('./portal.class.js');

var ngxBasePortalHostClass = ngCore.Class(new _ngxBasePortalHostClass());

function _ngxBasePortalHostClass() {
  this.constructor = function ngxBasePortalHostClass() { };

  this.hasAttached = function () {
    return !ngxUtil.isNull(this.attachedPortal);
  };

  this.attach = function (portal) {
    if (ngxUtil.isNull(portal)) {
      throw 'Portal is required';
    }

    if (this.hasAttached()) {
      throw 'Portal has already been attached';
    }

    if (portal instanceof ngxPortalClasses.componentPortalClass) {
      this.attachedPortal = portal;

      return this.attachComponentPortal(portal);
    }
    else if (portal instanceof ngxPortalClasses.templatePortalClass) {
      this.attachedPortal = portal;

      return this.attachTemplatePortal(portal);
    }

    throw 'Invalid portal';
  };

  this.detach = function () {
    if (this.hasAttached()) {
      this.attachedPortal.attachedHost = null;
      this.attachedPortal = null;
    }

    this.dispose();

    return Promise.resolve(null);
  };

  this.destroy = function () {
    if (this.hasAttached()) { this.detach(); }
  };

  //Return Promise which success() return ComponentRef  
  this.attachComponentPortal = function (portal) {
    throw 'attachComponentPortal must be implemented';
  };

  //Return Promise which success() return this.attachedPortal.locals  
  this.attachTemplatePortal = function (portal) {
    throw 'attachTemplatePortal must be implemented';
  };

  //Should assign a function to override this.dispose() inside of Promise's success() 
  //which is returned from attachComponentPortal/attachTemplatePortal
  //if there're resources should be released when this.detach() is called
  this.dispose = function () { };
}

function _ngxDomPortalHostClass() {
  var _base;

  this.extends = ngxBasePortalHostClass;

  this.constructor = function ngxDomPortalHostClass(hostElement, componentResolver) {
    ngxBasePortalHostClass.apply(this, arguments);

    this.hostElement = hostElement;
    this.componentResolver = componentResolver;
  };

  this.attachComponentPortal = function(portal) {
    if (ngxUtil.isNull(portal.viewContainerRef)) {
      throw 'Not found viewContainerRef from component portal';
    }

    var _self = this;

    return this.componentResolver.resolveComponent(portal.component)
      .then(function(componentFactory) {
        var _componentRef = portal.viewContainerRef.createComponent
        (
          componentFactory,
          portal.viewContainerRef.length,
          portal.injector || portal.viewContainerRef.parentInjector
        );

        _self.hostElement.appendChild(_componentRef.hostView.rootNodes[0]);

        _self.dispose = function () { _componentRef.destroy(); };

        return _componentRef;
      });
  };

  this.attachTemplatePortal = function(portal) {
    if (ngxUtil.isNull(portal.viewContainerRef)) {
      throw 'Not found viewContainerRef from template portal';
    }

    var _self = this,
        _viewRef = portal.viewContainerRef.createEmbeddedView(portal.templateRef);

    ngxUtil.forEach(_viewRef.rootNodes, function(rootNode) {
      _self.hostElement.appendChild(rootNode);
    });

    this.dispose = function() {
      var _index = portal.viewContainerRef.indexOf(_viewRef);
      if(_index != -1){ portal.viewContainerRef.remove(_index); }
    };

    return Promise.resolve(this.attachedPortal.locals);
  };

  this.destroy = function () {
    if (!ngxUtil.isNull(this.hostElement.parentNode)) {
      this.hostElement.parentNode.removeChild(this.hostElement);
    }

    _getBaseInstance(this).destroy.apply(this);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBasePortalHostClass); }
    return _base;
  }
}

module.exports = {
  basePortalHostClass: ngxBasePortalHostClass,
  domPortalHostClass: ngCore.Class(new _ngxDomPortalHostClass())
};