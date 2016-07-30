function _shallowCopy(target, source, overrideTarget, onCopying) {
  for (var prop in source) {
    if (!target[prop] || (target[prop] && overrideTarget)) {
      if (!onCopying || onCopying(prop)) {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}

function _newGUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
    var _random = Math.random() * 16 | 0;
    return (char === 'x' ? _random : (_random & 0x3 | 0x8)).toString(16);
  });
}

function _isString(target) {
  return target && typeof (target) === 'string';
}
function _isObject(target) {
  return target && typeof (target) === 'object';
}
function _isArray(target) {
  return target && Object.prototype.toString.call(target) === '[object Array]';
}
function _isFunction(target) {
  return target && typeof (target) === 'function';
}
function _isNull (target) {
  return target === undefined || target === null; 
}
function _isEmpty (target) {
  return _isNull(target) || target === '';
}

function _distinct (target) {
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
function _forEach (target, callback) {
  if (target && callback) {
    if (_isArray(target)) {
      for (var i = 0, length = target.length; i < length; i++) {
        if (callback(target[i], i)) {
          break;
        }
      }
    }
    else if (_isObject(target)) {
      for (var prop in target) {
        if (callback(target[prop], prop)) {
          break;
        }
      }
    }
  }
}

function _splice (target, item, compareTo){
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

module.exports = {
  shallowCopy: _shallowCopy,
  newGUID: _newGUID,
  isString: _isString,
  isObject: _isObject,
  isArray: _isArray,
  isFunction: _isFunction,
  isNull: _isNull,
  isEmpty: _isEmpty,
  distinct: _distinct,
  forEach: _forEach,
  splice: _splice
};