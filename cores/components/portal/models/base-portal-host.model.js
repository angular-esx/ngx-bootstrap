import * as ngCore from '@angular/core';
import * as ngxUtils from '../../../utils';
import ngxComponentPortal from './component-portal.model';
import ngxTemplatePortal from './template-portal.model';


function _ngxBasePortalHost() {
  this.constructor = function ngxBasePortalHost() { };

  this.hasAttached = function () {
    return !ngxUtils.isNull(this.attachedPortal);
  };

  this.attach = function (portal) {
    if (ngxUtils.isNull(portal)) {
      throw 'Portal is required';
    }

    if (this.hasAttached()) {
      throw 'Portal has already been attached';
    }

    if (portal instanceof ngxComponentPortal) {
      this.attachedPortal = portal;

      return this.attachComponentPortal(portal);
    }
    else if (portal instanceof ngxTemplatePortal) {
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


export var ngxBasePortalHost = ngCore.Class(new _ngxBasePortalHost());