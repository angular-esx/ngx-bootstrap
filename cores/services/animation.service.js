import * as ngCore from '@angular/core';

// import * as ngPlatformBrowser from 'angular2/platform/browser';
// import * as ngDOMAdapter from 'angular2/src/platform/dom/dom_adapter';
// import * as ngAmimation from 'angular2/animate';


// ngDOMAdapter.setRootDomAdapter(new ngPlatformBrowser.BrowserDomAdapter());

function _ngxAnimationService() {
  this.constructor = function ngxAnimationService() {
    // this.animationBuilder = new ngAmimation.AnimationBuilder(new ngAmimation.BrowserDetails());
  };

   this.fadeIn = function (elementRef, options) {
    //  var _self = this, 
    //      _nativeElement = elementRef.nativeElement;

    //  return new Promise(function (resolve) {
    //    var _cssAnimationBuilder = _self.animationBuilder.css()
    //    .setDuration(options && options.duration ? options.duration : 250)
    //    .addAnimationClass('fade')
    //    .setFromStyles({ opacity: 0 })
    //    .setToStyles({ opacity: 1 })
    //    .start(_nativeElement);

    //    _cssAnimationBuilder.onComplete(function () {
    //      resolve();
    //    });
    //  });
   };
   this.fadeOut = function (elementRef, options) {
    //  var _self = this,
    //      _nativeElement = elementRef.nativeElement;

    //  return new Promise(function (resolve) {
    //    var _cssAnimationBuilder = _self.animationBuilder.css()
    //    .setDuration(options && options.duration ? options.duration : 250)
    //    .addAnimationClass('fade')
    //    .setFromStyles({ opacity: 1 })
    //    .setToStyles({ opacity: 0 })
    //    .start(_nativeElement);

    //    _cssAnimationBuilder.onComplete(function () {
    //      _cssAnimationBuilder.removeClasses(['fade']);

    //      resolve();
    //    });
    //  });
   };

   this.collapseIn = function (elementRef, options) {
    //  var _self = this,
    //      _nativeElement = elementRef.nativeElement;

    //  return new Promise(function (resolve) {
    //    _self.animationBuilder.css()
    //    .setDuration(0)
    //    .addClass('collapse-in')
    //    .setFromStyles({ overflow: 'hidden', height: 0 })
    //    .start(_nativeElement)
    //    .onComplete(function () {
    //      _self.animationBuilder.css()
    //      .setDuration(options && options.duration ? options.duration : 250)
    //      .addAnimationClass('collapse-out')
    //      .setFromStyles({ height: 0 })
    //      .setToStyles({ height: _nativeElement.scrollHeight + 'px' })
    //      .start(_nativeElement)
    //      .onComplete(function () {
    //        resolve();
    //      });
    //    });
    //  });
   };
   this.collapseOut = function (elementRef, options) {
    //  var _self = this,
    //      _nativeElement = elementRef.nativeElement;

    //  if (_nativeElement.scrollHeight <= 0) { 
    //    return new Promise(function (resolve) { resolve(); }); 
    //  }

    //  return new Promise(function (resolve) {
    //    var _cssAnimationBuilder = _self.animationBuilder.css()
    //    .setDuration(options && options.duration ? options.duration : 250)
    //    .addAnimationClass('collapse-out')
    //    .setFromStyles({ height: _nativeElement.scrollHeight + 'px' })
    //    .setToStyles({ height: 0 })
    //    .start(_nativeElement);

    //    _cssAnimationBuilder.onComplete(function () {
    //      _cssAnimationBuilder.removeClasses(['collapse-in']);

    //      resolve();
    //    });
    //  });
   };
}


export var ngxAnimationService = ngCore.Class(new _ngxAnimationService());