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
  return _isNull(target) || target === '';
}

function distinct (target) {
  if (!_isArray(target)) {
    return target;
  }

  var _result = [];
  _forEach(target, function (item) {
    if (_result.indexOf(item) === -1) {
      _result.push(item);
    }
  });

  return _result;
}
function forEach(target, iterator, context) {
  if (target && iterator) {
    if (_isArray(target)) {
      for (var i = 0, length = target.length; i < length; i++) {
        if (iterator.call(context, target[i], i, target)) { break; }
      }
    }
    else if (_isObject(target)) {
      for (var prop in target) {
        if (iterator.call(context, target[prop], prop, target)) { break; }
      }
    }
  }
}

function splice (target, item, compareTo){
  if (!_isArray(target)) {
    return target;
  }
  
  var _comparedResult;
  _forEach(target, function (_item, index) {
    _comparedResult = compareTo ? compareTo(item, _item) : item === _item;

    if(_comparedResult){
      target.splice(index, 1);
      return true;
    }
  });
}


export {
  shallowCopy,
  newGUID,
  isString,
  isObject,
  isArray,
  isFunction,
  isNull,
  isEmpty,
  distinct,
  forEach,
  splice
};