(function (ngxBootstrap) {
  ngxBootstrap.shallowCopy = function (target, source, overrideTarget) {
    for (var prop in source) {
      if (!target[prop] || (target[prop] && overrideTarget)) {
        target[prop] = source[prop];
      }
    }

    return target;
  };
  
  ngxBootstrap.inherit = function (target, source, overrideTarget) {
    var _ngComponentLifeCycleFuncs = [
      'constructor',
      'ngOnChanges', 'ngOnInit', 'ngDoCheck', 
      'ngAfterContentInit', 'ngAfterContentChecked', 
      'ngAfterViewInit', 'ngAfterViewChecked',
      'ngOnDestroy'
    ]; 

    target.__proto__.base = source;

    for (var prop in source) {
      if (prop == _ngComponentLifeCycleFuncs[0] || !target[prop] || (target[prop] && overrideTarget)) {
        target.__proto__[prop] = source[prop];
        
        if (_ngComponentLifeCycleFuncs.indexOf(prop) > -1) {
          if (prop == _ngComponentLifeCycleFuncs[0]) {
            target[prop] = source[prop];
            target.onConstructing = (function (constructor) {
              return function () {
                if (typeof constructor == 'function') {
                  constructor.apply(source, arguments);
                }
                else {
                  constructor[constructor.length - 1].apply(source, arguments);
                }
              }
            })(target.__proto__[prop]);
          }
          else {
            target[prop] = (function (func) {
              return function () {
                func.apply(source, arguments);
              };
            })(target.__proto__[prop]);
          }
        }
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