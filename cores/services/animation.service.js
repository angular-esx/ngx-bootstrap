var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');

function _ngxAnimationService() {
  var _ANIMATIONS;

  this.constructor = [
    ng.platform.browser.BROWSER_APP_PROVIDERS[0][16],

    function ngxAnimationService(animationBuilder) {
      this.animationBuilder = animationBuilder;
    }
  ];

  this.getAnimationClass = function (prefixClass, animations) {
    if (!animations) { return ''; }

    var _animations = animations.split(' ');
    var _animation, _funcName, _self = this, _animationClasses = [];

    ngxBootstrap.forEach(_animations, function (animation) {
      _animation = animation.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      _animation = _animation.charAt(0).toUpperCase() + _animation.slice(1);

      _funcName = 'get' + _animation + 'AnimationClass';
      _animationClasses.push(_self[_funcName] ? _self[_funcName](prefixClass) : prefixClass + '-animation-' + _animation);
    });

    return _animationClasses.length === 0 ? '' : _animationClasses.join(' ');
  };

  this.getAnimations = function () {
    if (!_ANIMATIONS) {
      _ANIMATIONS = {};
      var _animation;

      for (var prop in this) {
        if (typeof this[prop] == 'function' && /get.+AnimationClass/.test(prop)) {
          _animation = prop.replace('get', '').replace('AnimationClass', '')
                      .replace(/([A-Z])/g, function (x, y) { return '_' + y; })
                      .replace(/^_/, '');

          _ANIMATIONS[_animation.toUpperCase()] = _animation.toLocaleLowerCase().replace(/_/g, '-');
        }
      }
    }

    return ngxBootstrap.shallowCopy({}, _ANIMATIONS);
  };

  this.isFadeAnimationClass = function (prefixClass, animation) {
    return this.getAnimationClass(prefixClass, animation).indexOf(this.getFadeAnimationClass(prefixClass)) > -1;
  };
  this.getFadeAnimationClass = function (prefixClass) {
    return prefixClass + '-animation-fade';
  };
  
  this.isFadeInAnimationClass = function (prefixClass, animation) {
    return this.getAnimationClass(prefixClass, animation).indexOf(this.getFadeInAnimationClass(prefixClass)) > -1;
  };
  this.getFadeInAnimationClass = function (prefixClass) {
    return prefixClass + '-animation-fade-in';
  };
  
  this.collapseIn = function (nativeElement) {
    var _self = this,
        _cssAnimationBuilder = this.animationBuilder.css();
    
    _cssAnimationBuilder
        .setDuration(0)
        .addClass('collapse-in')
        .setFromStyles({ overflow: 'hidden', height: '0' })
        .start(nativeElement)
        .onComplete(function () {
          _cssAnimationBuilder
               .setDuration(250)
               .addAnimationClass('collapse-out')
               .setFromStyles({ height: '0' })
               .setToStyles({ height: nativeElement.scrollHeight + 'px' })
               .start(nativeElement);
        });
  };
  this.collapseOut = function (nativeElement) {
    if (nativeElement.scrollHeight <= 0) { return; }
    
    var _animation = this.animationBuilder.css()
                         .setDuration(250)
                         .addAnimationClass('collapse-out')
                         .setFromStyles({ height: nativeElement.scrollHeight + 'px' })
                         .setToStyles({ height: '0' })
                         .start(nativeElement);

    _animation.onComplete(function () {
      _animation.removeClasses(['collapse-in']);
    });
  };
}

module.exports = ng.core.Class(new _ngxAnimationService());