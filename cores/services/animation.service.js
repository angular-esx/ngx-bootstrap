function _ngxAnimationService() {
  this.constructor = [
    ng.platform.browser.BROWSER_APP_PROVIDERS[0][16],

    function ngxAnimationService(animationBuilder) {
      this.animationBuilder = animationBuilder;
    }
  ]; 

  this.fadeIn = function (elementRef, options) {
    var _self = this, 
        _nativeElement = elementRef.nativeElement;

    return new Promise(function (resolve) {
      var _cssAnimationBuilder = _self.animationBuilder.css()
      .setDuration(options && options.duration ? options.duration : 250)
      .addAnimationClass('fade')
      .setFromStyles({ opacity: 0 })
      .setToStyles({ opacity: 1 })
      .start(_nativeElement);

      _cssAnimationBuilder.onComplete(function () {
        resolve();
      });
    });
  };
  this.fadeOut = function (elementRef, options) {
    var _self = this,
        _nativeElement = elementRef.nativeElement;

    return new Promise(function (resolve) {
      var _cssAnimationBuilder = _self.animationBuilder.css()
      .setDuration(options && options.duration ? options.duration : 250)
      .addAnimationClass('fade')
      .setFromStyles({ opacity: 1 })
      .setToStyles({ opacity: 0 })
      .start(_nativeElement);

      _cssAnimationBuilder.onComplete(function () {
        _cssAnimationBuilder.removeClasses(['fade']);

        resolve();
      });
    });
  };

  this.collapseIn = function (elementRef, options) {
    var _self = this,
        _nativeElement = elementRef.nativeElement;

    return new Promise(function (resolve) {
      _self.animationBuilder.css()
      .setDuration(0)
      .addClass('collapse-in')
      .setFromStyles({ overflow: 'hidden', height: 0 })
      .start(_nativeElement)
      .onComplete(function () {
        _self.animationBuilder.css()
        .setDuration(options && options.duration ? options.duration : 250)
        .addAnimationClass('collapse-out')
        .setFromStyles({ height: 0 })
        .setToStyles({ height: _nativeElement.scrollHeight + 'px' })
        .start(_nativeElement)
        .onComplete(function () {
          resolve();
        });
      });
    });
  };
  this.collapseOut = function (elementRef, options) {
    var _self = this,
        _nativeElement = elementRef.nativeElement;
    
    if (_nativeElement.scrollHeight <= 0) { 
      return new Promise(function (resolve) { resolve(); }); 
    }

    return new Promise(function (resolve) {
      var _cssAnimationBuilder = _self.animationBuilder.css()
      .setDuration(options && options.duration ? options.duration : 250)
      .addAnimationClass('collapse-out')
      .setFromStyles({ height: _nativeElement.scrollHeight + 'px' })
      .setToStyles({ height: 0 })
      .start(_nativeElement);

      _cssAnimationBuilder.onComplete(function () {
        _cssAnimationBuilder.removeClasses(['collapse-in']);

        resolve();
      });
    });
  };
}

module.exports = ng.core.Class(new _ngxAnimationService());