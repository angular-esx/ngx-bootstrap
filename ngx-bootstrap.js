(function (ngxBootstrap) {
  var _configs = ngxBootstrap.configs = {};
  _configs.fileService = new (function () {
    this.ROOT = '/';
    this.COMPONENTS = this.ROOT + 'components/';

    this.getComponentTemplate = function (componentName, templateName) {
      if (!templateName) { templateName = componentName + '.component.html'; }

      return this.COMPONENTS + componentName + '/templates/' +  templateName;
    };
    this.getTestCaseTemplate = function (componentName, testcase) {
      if (!testcase) { testcase = 'isolated-components'; }

      return this.COMPONENTS + componentName + '/tests/ui/' + testcase + '/test-case.html';
    };
  })();

  ngxBootstrap.ngxClass = {};
  ngxBootstrap.ngxComponents = {};

  /*Utils*/
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

  ngxBootstrap.getRootInstance = function (instance, targetClass) {
    var _root;

    if (instance && typeof instance.getBaseInstance == 'function') {
      _root = instance.getBaseInstance();
      while (_root.getBaseInstance != undefined) {
        if (!targetClass && _root instanceof targetClass) { break; }
        _root = _root.getBaseInstance();
      }
    }

    return _root;
  };

})(window.ngxBootstrap || (window.ngxBootstrap = {}))