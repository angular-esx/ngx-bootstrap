var ngxBackdropComponent = require('../backdrop.component.js');
var ngxBackdropObserver = require('./backdrop-observer.service.js');

function _ngxBackdropService() {
  this.constructor = [
    ng.core.DynamicComponentLoader,
    ngxBackdropObserver,

    function ngxBackdropService(dynamicComponentLoader, ngxBackdropObserver) {
      if (ngx.isNull(dynamicComponentLoader)) { throw 'dynamicComponentLoader is required'; }
      if (ngx.isNull(ngxBackdropObserver)) { throw 'ngxBackdropObserver is required'; }

      this.dynamicComponentLoader = dynamicComponentLoader;
      this.ngxBackdropObserver = ngxBackdropObserver;
    }
  ];

  this.ngOnDestroy = function () {
    if (!ngx.isNull(this.backdropRef)) { this.backdropRef.destroy(); }
  };

  this.setRootViewContainerRef = function (rootViewContainerRef) {
    if (ngx.isNull(rootViewContainerRef)) { throw 'rootViewContainerRef is required'; }

    this.rootViewContainerRef = rootViewContainerRef;

    if (!ngx.isNull(this.backdropRef)) {
      this.backdropRef.destroy();
      this.backdropRef = null;
    }
    
    var _self = this,
        _injector = ng.core.ReflectiveInjector.resolve([
           new ng.core.Provider(ngxBackdropObserver, { useValue: this.ngxBackdropObserver })
        ]);

    return this.dynamicComponentLoader
               .loadNextToLocation(ngxBackdropComponent, this.rootViewContainerRef, _injector)
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
      if (!ngx.isEmpty(event) && event.type === _self.getActions().CLICK_BACKDROP) {
        handler(event);
      }
    });
  };
}

module.exports = ng.core.Class(new _ngxBackdropService());