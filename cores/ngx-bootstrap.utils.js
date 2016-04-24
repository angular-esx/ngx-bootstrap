var ngxBootstrapUtils = {};

ngxBootstrapUtils.shallowCopy = function (target, source, overrideTarget) {
  for (var prop in source) {
    if (!target[prop] || (target[prop] && overrideTarget)) {
      target[prop] = source[prop];
    }
  }

  return target;
};

ngxBootstrapUtils.isString = function (target) {
  return target && typeof (target) === 'string';
};
ngxBootstrapUtils.isObject = function (target) {
  return target && typeof (target) === 'object';
};
ngxBootstrapUtils.isArray = function (target) {
  return target && Object.prototype.toString.call(target) === '[object Array]';
};
ngxBootstrapUtils.isFunction = function (target) {
  return target && typeof (target) === "function";
};

ngxBootstrapUtils.distinct = function (target, compareTo) {
  if (!ngxBootstrapUtils.isArray(target)) {
    return target;
  }

  var _value, _result = [];
  ngxBootstrapUtils.forEach(target, function (item) {
    _value = compareTo ? compareTo(item) : item;

    if (_result.indexOf(_value) === -1) {
      _result.push(_value);
    }
  });

  return _result;
};
ngxBootstrapUtils.forEach = function (target, callback) {
  if (target && callback) {
    if(ngxBootstrapUtils.isObject(target)){
      for (var prop in target) {
        if (callback(target[prop], prop)) {
          break;
        }
      }
    }
    else if(ngxBootstrapUtils.isFunction(target)){
      for (var i = 0, length = target.length; i < length; i++) {
        if (callback(target[i], i)) {
          break;
        }
      }
    }
  }
};

ngxBootstrapUtils.hasClass = function (element, className) {
  return element.className && element.className.indexOf(className) > -1;
};

ngxBootstrapUtils.addClass = function (element, className) {
  element.className = ngxBootstrapUtils.hasClass(element, className) ? element.className : className;
};

module.exports = ngxBootstrapUtils;