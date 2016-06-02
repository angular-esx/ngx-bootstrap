function _ngxAnimationService() {
  this.constructor = [
    ng.platform.browser.BROWSER_APP_PROVIDERS[0][16],

    function ngxAnimationService(animationBuilder) {
      this.animationBuilder = animationBuilder;
    }
  ]; 

  this.fadeIn = function (nativeElement, options) {
    this.animationBuilder.css()
        .setDuration(options && options.duration ? options.duration : 250)
        .addAnimationClass('fade')
        .setFromStyles({ opacity: 0 })
        .setToStyles({ opacity: 1 })
        .start(nativeElement);
  };
  this.fadeOut = function (nativeElement, options) {
    var _animation = this.animationBuilder.css()
                         .setDuration(options && options.duration ? options.duration : 250)
                         .addAnimationClass('fade')
                         .setFromStyles({ opacity: 1 })
                         .setToStyles({ opacity: 0 })
                         .start(nativeElement);

    _animation.onComplete(function () {
      _animation.removeClasses(['fade']);
    });
  };

  this.collapseIn = function (nativeElement, options) {
    var _self = this,
        _cssAnimationBuilder = this.animationBuilder.css();
    
    _cssAnimationBuilder
        .setDuration(0)
        .addClass('collapse-in')
        .setFromStyles({ overflow: 'hidden', height: 0 })
        .start(nativeElement)
        .onComplete(function () {
          _cssAnimationBuilder
               .setDuration(options && options.duration ? options.duration : 250)
               .addAnimationClass('collapse-out')
               .setFromStyles({ height: 0 })
               .setToStyles({ height: nativeElement.scrollHeight + 'px' })
               .start(nativeElement);
        });
  };
  this.collapseOut = function (nativeElement, options) {
    if (nativeElement.scrollHeight <= 0) { return; }
    
    var _animation = this.animationBuilder.css()
                         .setDuration(options && options.duration ? options.duration : 250)
                         .addAnimationClass('collapse-out')
                         .setFromStyles({ height: nativeElement.scrollHeight + 'px' })
                         .setToStyles({ height: 0 })
                         .start(nativeElement);

    _animation.onComplete(function () {
      _animation.removeClasses(['collapse-in']);
    });
  };
}

module.exports = ng.core.Class(new _ngxAnimationService());