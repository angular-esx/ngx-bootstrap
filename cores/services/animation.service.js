function _ngxAnimationService() {
  this.constructor = [
    ng.platform.browser.BROWSER_APP_PROVIDERS[0][16],

    function ngxAnimationService(animationBuilder) {
      this.animationBuilder = animationBuilder;
    }
  ]; 

  this.fadeIn = function (nativeElement, options) {
    var _self = this;

    return new Promise(function (resolve) {
      var _cssAnimationBuilder = _self.animationBuilder.css()
      .setDuration(options && options.duration ? options.duration : 250)
      .addAnimationClass('fade')
      .setFromStyles({ opacity: 0 })
      .setToStyles({ opacity: 1 })
      .start(nativeElement);

      _cssAnimationBuilder.onComplete(function () {
        resolve();
      });
    });
  };
  this.fadeOut = function (nativeElement, options) {
    var _self = this;

    return new Promise(function (resolve) {
      var _cssAnimationBuilder = _self.animationBuilder.css()
      .setDuration(options && options.duration ? options.duration : 250)
      .addAnimationClass('fade')
      .setFromStyles({ opacity: 1 })
      .setToStyles({ opacity: 0 })
      .start(nativeElement);

      _cssAnimationBuilder.onComplete(function () {
        _cssAnimationBuilder.removeClasses(['fade']);

        resolve();
      });
    });
  };

  this.collapseIn = function (nativeElement, options) {
    var _self = this;

    return new Promise(function (resolve) {
      _self.animationBuilder.css()
      .setDuration(0)
      .addClass('collapse-in')
      .setFromStyles({ overflow: 'hidden', height: 0 })
      .start(nativeElement)
      .onComplete(function () {
        _self.animationBuilder.css()
        .setDuration(options && options.duration ? options.duration : 250)
        .addAnimationClass('collapse-out')
        .setFromStyles({ height: 0 })
        .setToStyles({ height: nativeElement.scrollHeight + 'px' })
        .start(nativeElement)
        .onComplete(function () {
          resolve();
        });
      });
    });
  };
  this.collapseOut = function (nativeElement, options) {
    if (nativeElement.scrollHeight <= 0) { return; }
    
    var _self = this;

    return new Promise(function (resolve) {
      var _cssAnimationBuilder = _self.animationBuilder.css()
      .setDuration(options && options.duration ? options.duration : 250)
      .addAnimationClass('collapse-out')
      .setFromStyles({ height: nativeElement.scrollHeight + 'px' })
      .setToStyles({ height: 0 })
      .start(nativeElement);

      _cssAnimationBuilder.onComplete(function () {
        _cssAnimationBuilder.removeClasses(['collapse-in']);

        resolve();
      });
    });
  };
}

module.exports = ng.core.Class(new _ngxAnimationService());