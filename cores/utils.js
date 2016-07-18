var ngx = {};

ngx.shallowCopy = function (target, source, overrideTarget, onCopying) {
  for (var prop in source) {
    if (!target[prop] || (target[prop] && overrideTarget)) {
      if (!onCopying || onCopying(prop)) {
        target[prop] = source[prop];
      }
    }
  }

  return target;
};

ngx.newGUID = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
    var _random = Math.random() * 16 | 0;
    return (char === 'x' ? _random : (_random & 0x3 | 0x8)).toString(16);
  });
};

ngx.isString = function (target) {
  return target && typeof (target) === 'string';
};
ngx.isObject = function (target) {
  return target && typeof (target) === 'object';
};
ngx.isArray = function (target) {
  return target && Object.prototype.toString.call(target) === '[object Array]';
};
ngx.isFunction = function (target) {
  return target && typeof (target) === 'function';
};
ngx.isEmpty = function(target) {
  return target === null || target === undefined || target === "";
};

ngx.distinct = function (target) {
  if (!ngx.isArray(target)) {
    return target;
  }

  var _result = [];
  ngx.forEach(target, function (item) {
    if (_result.indexOf(item) === -1) {
      _result.push(item);
    }
  });

  return _result;
};
ngx.forEach = function (target, callback) {
  if (target && callback) {
    if (ngx.isArray(target)) {
      for (var i = 0, length = target.length; i < length; i++) {
        if (callback(target[i], i)) {
          break;
        }
      }
    }
    else if (ngx.isObject(target)) {
      for (var prop in target) {
        if (callback(target[prop], prop)) {
          break;
        }
      }
    }
  }
};

ngx.splice = function(target, item, compareTo){
  if (!ngx.isArray(target)) {
    return target;
  }
  
  var _comparedResult;
  ngx.forEach(target, function (_item, index) {
    _comparedResult = compareTo ? compareTo(item, _item) : item === _item;

    if(_comparedResult){
      target.splice(index, 1);
      return true;
    }
  });
}; 

module.exports = ngx;