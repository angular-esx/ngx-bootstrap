var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');

function _ngxAnimationService() {
  var _ANIMATIONS;

  this.constructor = function () {
    this.prefixClass = '';
  };

  this.getAnimationClass = function (animations) {
    if (!animations) { return ''; }

    var _animations = animations.split(' ');
    var _animation, _funcName, _self = this, _animationClasses = [];

    ngxBootstrap.forEach(_animations, function (animation) {
      _animation = animation.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      _animation = _animation.charAt(0).toUpperCase() + _animation.slice(1);

      _funcName = 'get' + _animation + 'AnimationClass';
      _animationClasses.push(_self[_funcName] ? _self[_funcName]() : _self.prefixClass + '-animation-' + _animation);
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

  this.isFadeAnimationClass = function (animation) {
    return this.getAnimationClass(animation).indexOf(this.getFadeAnimationClass()) > -1;
  };
  this.getFadeAnimationClass = function () {
    return this.prefixClass + '-animation-fade';
  };
  
  this.isFadeInAnimationClass = function (animation) {
    return this.getAnimationClass(animation).indexOf(this.getFadeInAnimationClass()) > -1;
  };
  this.getFadeInAnimationClass = function () {
    return this.prefixClass + '-animation-fade-in';
  };
  
}

module.exports = ng.core.Class(new _ngxAnimationService());