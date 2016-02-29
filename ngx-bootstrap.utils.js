(function (ngxBootstrap) {
  ngxBootstrap.shallowCopy = function (target, source, overrideTarget) {
    for (var prop in source) {
      if (!target[prop] || (target[prop] && overrideTarget)) {
        target[prop] = source[prop];
      }
    }

    return target;
  };

  ngxBootstrap.getRootInstance = function (instance) {
    if (instance && instance.__proto__.base) {
      var _root = instance.__proto__.base;

      while (_root.__proto__.base != undefined) {
        _root = _root.__proto__.base;
      }

      return _root;
    }

    return instance;
  };

  ngxBootstrap.getBaseInstance = function (instance, targetClass) {
    if (instance && instance.__proto__.base) {
      var _root = instance.__proto__.base;

      while (_root.__proto__.base != undefined) {
        if (!targetClass && _root instanceof targetClass) { return _root; }
        _root = _root.__proto__.base;
      }

      return null;
    }

    return instance;
  };

  ngxBootstrap.hasClass = function (element, className) {
    return element.className && element.className.indexOf(className) > -1;
  };

  ngxBootstrap.addClass = function (element, className) {
    element.className = ngxBootstrap.hasClass(element, className) ? element.className : className;
  };

})(window.ngxBootstrap || (window.ngxBootstrap = {}))