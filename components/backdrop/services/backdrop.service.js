import * as ngCore from '@angular/core';
import ngxUtils from  '../../cores';
import ngxBackdrop from '../backdrop.component';
import ngxBackdropObserver from './backdrop.observer';

function _ngxBackdropService() {
  this.constructor = [
    ngCore.DynamicComponentLoader,
    ngxBackdropObserver,

    function ngxBackdropService(dynamicComponentLoader, ngxBackdropObserver) {
      if (ngxUtil.isNull(dynamicComponentLoader)) { throw 'dynamicComponentLoader is required'; }
      if (ngxUtil.isNull(ngxBackdropObserver)) { throw 'ngxBackdropObserver is required'; }

      this.dynamicComponentLoader = dynamicComponentLoader;
      this.ngxBackdropObserver = ngxBackdropObserver;
    }
  ];

  this.ngOnDestroy = function () {
    if (!ngxUtil.isNull(this.backdropRef)) { this.backdropRef.destroy(); }
  };

  this.setRootViewContainerRef = function (rootViewContainerRef) {
    if (ngxUtil.isNull(rootViewContainerRef)) { throw 'rootViewContainerRef is required'; }

    this.rootViewContainerRef = rootViewContainerRef;

    if (!ngxUtil.isNull(this.backdropRef)) {
      this.backdropRef.destroy();
      this.backdropRef = null;
    }
    
    var _self = this,
        _injector = ngCore.ReflectiveInjector.resolve([
           new ngCore.Provider(ngxBackdropObserver, { useValue: this.ngxBackdropObserver })
        ]);

    return this.dynamicComponentLoader
               .loadNextToLocation(ngxBackdrop, this.rootViewContainerRef, _injector)
               .then(function (backdropRef) { _self.backdropRef = backdropRef; });
  };

  this.getActions = function () {
    return this.ngxBackdropObserver.getActions();
  };

  this.next = function (event) {
    this.ngxBackdropObserver.next(event);
  };

  this.getShow$ = function () {
    return this.ngxBackdropObserver.getShow$();
  };
  this.show = function () {
    this.ngxBackdropObserver.show();
  };

  this.getHide$ = function () {
    return this.ngxBackdropObserver.getHide$();
  };
  this.hide = function () {
    this.ngxBackdropObserver.hide();
  };

  this.onClick = function (handler) {
    var _self = this;
    
    return this.ngxBackdropObserver.ngxBackdrop$.subscribe(function (event) {
      if (!ngxUtil.isEmpty(event) && event.type === _self.getActions().CLICK_BACKDROP) {
        handler(event);
      }
    });
  };
}

export var ngxBackdropService = ngCore.Class(new _ngxBackdropService());