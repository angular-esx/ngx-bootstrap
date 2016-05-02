var ngxBootstrap = require('./ngx-bootstrap.js');

ngxBootstrap.shallowCopy = function (target, source, overrideTarget) {
  for (var prop in source) {
    if (!target[prop] || (target[prop] && overrideTarget)) {
      target[prop] = source[prop];
    }
  }

  return target;
};

ngxBootstrap.isString = function (target) {
  return target && typeof (target) === 'string';
};
ngxBootstrap.isObject = function (target) {
  return target && typeof (target) === 'object';
};
ngxBootstrap.isArray = function (target) {
  return target && Object.prototype.toString.call(target) === '[object Array]';
};
ngxBootstrap.isFunction = function (target) {
  return target && typeof (target) === 'function';
};

ngxBootstrap.distinct = function (target, compareTo) {
  if (!ngxBootstrap.isArray(target)) {
    return target;
  }

  var _value, _result = [];
  ngxBootstrap.forEach(target, function (item) {
    _value = compareTo ? compareTo(item) : item;

    if (_result.indexOf(_value) === -1) {
      _result.push(_value);
    }
  });

  return _result;
};
ngxBootstrap.forEach = function (target, callback) {
  if (target && callback) {
    if(ngxBootstrap.isObject(target)){
      for (var prop in target) {
        if (callback(target[prop], prop)) {
          break;
        }
      }
    }
    else if(ngxBootstrap.isFunction(target)){
      for (var i = 0, length = target.length; i < length; i++) {
        if (callback(target[i], i)) {
          break;
        }
      }
    }
  }
};

ngxBootstrap.hasClass = function (element, className) {
  return element.className && element.className.indexOf(className) > -1;
};

ngxBootstrap.addClass = function (element, className) {
  element.className = ngxBootstrap.hasClass(element, className) ? element.className : className;
};

module.exports = ngxBootstrap;