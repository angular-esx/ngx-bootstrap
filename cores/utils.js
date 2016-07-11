var ngxBootstrap = {};

ngxBootstrap.shallowCopy = function (target, source, overrideTarget, onCopying) {
  for (var prop in source) {
    if (!target[prop] || (target[prop] && overrideTarget)) {
      if (!onCopying || onCopying(prop)) {
        target[prop] = source[prop];
      }
    }
  }

  return target;
};

ngxBootstrap.newGUID = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
    var _random = Math.random() * 16 | 0;
    return (char === 'x' ? _random : (_random & 0x3 | 0x8)).toString(16);
  });
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

ngxBootstrap.distinct = function (target) {
  if (!ngxBootstrap.isArray(target)) {
    return target;
  }

  var _result = [];
  ngxBootstrap.forEach(target, function (item) {
    if (_result.indexOf(item) === -1) {
      _result.push(item);
    }
  });

  return _result;
};
ngxBootstrap.forEach = function (target, callback) {
  if (target && callback) {
    if (ngxBootstrap.isArray(target)) {
      for (var i = 0, length = target.length; i < length; i++) {
        if (callback(target[i], i)) {
          break;
        }
      }
    }
    else if (ngxBootstrap.isObject(target)) {
      for (var prop in target) {
        if (callback(target[prop], prop)) {
          break;
        }
      }
    }
  }
};

ngxBootstrap.splice = function(target, item, compareTo){
  if (!ngxBootstrap.isArray(target)) {
    return target;
  }
  
  var _comparedResult;
  ngxBootstrap.forEach(target, function (_item, index) {
    _comparedResult = compareTo ? compareTo(item, _item) : item === _item;

    if(_comparedResult){
      target.splice(index, 1);
      return true;
    }
  });
}; 

module.exports = ngxBootstrap;