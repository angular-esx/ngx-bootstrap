(function (ngxBootstrap) {
  /*Utils*/
  ngxBootstrap.shallowCopy = function (target, source, overrideTarget) {
    for (var prop in source) {
      if (!target[prop] || (target[prop] && overrideTarget)) {
        target[prop] = source[prop];
      }
    }

    return target;
  };

  ngxBootstrap.hasClass = function (element, className) {
    return element.className && element.className.indexOf(className) > -1;
  };

  ngxBootstrap.addClass = function (element, className) {
    element.className = ngxBootstrap.hasClass(element, className) ? element.className : className;
  };

})(window.ngxBootstrap || (window.ngxBootstrap = {}))