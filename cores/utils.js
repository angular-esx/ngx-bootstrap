function shallowCopy(target, source, overrideTarget, onCopying) {
  for (var prop in source) {
    if (!target[prop] || (target[prop] && overrideTarget)) {
      if (!onCopying || onCopying(prop)) {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}

function newGUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
    var _random = Math.random() * 16 | 0;
    return (char === 'x' ? _random : (_random & 0x3 | 0x8)).toString(16);
  });
}

function isString(target) {
  return target && typeof (target) === 'string';
}
function isObject(target) {
  return target && typeof (target) === 'object';
}
function isArray(target) {
  return target && Object.prototype.toString.call(target) === '[object Array]';
}
function isFunction(target) {
  return target && typeof (target) === 'function';
}
function isNull (target) {
  return target === undefined || target === null; 
}
function isEmpty (target) {
  return ngx.isNull(target) || target === '';
}

function distinct (target) {
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
}
function forEach (target, callback) {
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
}

function splice (target, item, compareTo){
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
}

module.exports = {
  shallowCopy: shallowCopy,
  newGUID: newGUID,
  isString: isString,
  isObject: isObject,
  isArray: isArray,
  isFunction: isFunction,
  isNull: isNull,
  isEmpty: isEmpty,
  distinct: distinct,
  forEach: forEach,
  splice: splice
};