(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ngxBootstrap", [], factory);
	else if(typeof exports === 'object')
		exports["ngxBootstrap"] = factory();
	else
		root["ngxBootstrap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var ngxLabelService = __webpack_require__(1);
	var ngxBaseComponent = __webpack_require__(6);
	var ngxBootstrap = __webpack_require__(3);
	ngxBootstrap = __webpack_require__(5);

	function _ngxLabelComponent() {
	  var _ATTRIBUTES = {
	    COLOR: 'color',
	    TYPE: 'type'
	  };

	  this.extends = ngxBaseComponent;

	  this.constructor = [
	    ng.core.ElementRef,
	    ngxLabelService,

	    function (elementRef, ngxLabelService) {
	      ngxBaseComponent.call(this, elementRef);

	      this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
	      this.ngxLabelService = ngxLabelService;
	      this.cssClass = this.ngxLabelService.prefixClass;
	    }
	  ];

	  this.onBuildCssClass = function (changeRecord) {
	    var _prefixClass = this.ngxLabelService.prefixClass;
	    
	    var _prevColor, _currentColor;
	    if(this.ngxLabelService.getColorClass){
	      _prevColor = this.ngxLabelService.getColorClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.COLOR));
	      _currentColor = this.ngxLabelService.getColorClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.COLOR));
	    }
	    
	    var _prevType, _currentType;
	    if(this.ngxLabelService.getTypeClass){
	      _prevType = this.ngxLabelService.getTypeClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.TYPE));
	      _currentType = this.ngxLabelService.getTypeClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.TYPE));
	    }

	    var _classes = [
	      _prefixClass,
	      _currentColor || this.ngxLabelService.getDefaultColorClass()
	    ];
	    if (_currentType) { _classes.push(_currentType); }
	      
	    ngxBootstrap.forEach(this.cssClass.split(' '), function (className) {
	      if (
	          className && className != _prefixClass &&
	          (!_prevColor || _prevColor.indexOf(className) === -1) &&
	          (!_prevType || _prevType.indexOf(className) === -1)
	        )
	      {
	        _classes.push(className);
	      }
	    });
	    
	    return _classes.join(' ');
	  };
	}

	module.exports = ng.core.Component({
	  selector: 'ngx-label',
	  properties: ['color', 'type'],
	  template: "<span [class]=\"cssClass\"><ng-content></ng-content></span>",
	  styles: `.ngx-label {
	  display: inline-block;
	  padding: .25em .4em;
	  font-size: 75%;
	  font-weight: bold;
	  line-height: 1;
	  color: #fff;
	  text-align: center;
	  white-space: nowrap;
	  vertical-align: baseline;
	  border-radius: .25rem;
	}

	.ngx-label:empty {
	  display: none;
	}

	.ngx-label-type-pill {
	  padding-right: .6em;
	  padding-left: .6em;
	  border-radius: 10rem;
	}

	.ngx-label-color-default {
	  background-color: #818a91;
	}

	.ngx-label-color-primary {
	  background-color: #0275d8;
	}

	.ngx-label-color-success {
	  background-color: #5cb85c;
	}

	.ngx-label-color-info {
	  background-color: #5bc0de;
	}

	.ngx-label-color-warning {
	  background-color: #f0ad4e;
	}

	.ngx-label-color-danger {
	  background-color: #d9534f;
	}`,
	})
	.Class(new _ngxLabelComponent());

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var ngxColorService = __webpack_require__(2);
	var ngxTypeService = __webpack_require__(4);
	var ngxBootstrap = __webpack_require__(3);
	ngxBootstrap = __webpack_require__(5);

	function _ngxLabelService() {
	  this.constructor = [
	    ngxColorService,
	    ngxTypeService,

	    function (ngxColorService, ngxTypeService) {
	      ngxBootstrap.shallowCopy(this, ngxColorService);
	      ngxBootstrap.shallowCopy(this, ngxTypeService);

	      this.prefixClass = 'ngx-label';
	    }
	  ];

	  this.isPillTypeClass = function (type) {
	    return  this.getTypeClass(type).indexOf(this.getPillTypeClass()) > -1;
	  };
	  this.getPillTypeClass = function () {
	    return  this.prefixClass + '-type-pill';
	  };
	}

	module.exports = ng.core.Class(new _ngxLabelService());

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var ngxBootstrap = __webpack_require__(3);

	function _ngxColorService() {
	  var _COLORS;

	  this.constructor = function () {
	    this.prefixClass = '';
	  };

	  this.getColorClass = function (colors) {
	    if (!colors) { return ''; }

	    var _colors = colors.split(' ');
	    var _color, _funcName, _self = this, _colorClasses = [];
	    
	    ngxBootstrap.forEach(_colors, function(color){
	      _color = color.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
	      _color = _color.charAt(0).toUpperCase() + _color.slice(1);

	      _funcName = 'get' + _color + 'ColorClass';
	      _colorClasses.push(_self[_funcName] ? _self[_funcName]() : _self.prefixClass + '-color-' +_color);
	    });
	    
	    return _colorClasses.length === 0 ? '' : _colorClasses.join(' ');
	  };

	  this.getColors = function () {
	    if (!_COLORS) {
	      _COLORS = {};
	      var _color;

	      for (var prop in this) {
	        if (typeof this[prop] == 'function' && /get.+ColorClass/.test(prop)) {
	          _color = prop.replace('get', '').replace('ColorClass', '')
	                        .replace(/([A-Z])/g, function (x, y) { return '_' + y; })
	                        .replace(/^_/, '');

	          _COLORS[_color.toUpperCase()] = _color.toLocaleLowerCase().replace(/_/g, '-');
	        }
	      }
	    }

	    return ngxBootstrap.shallowCopy({}, _COLORS);
	  };

	  this.isOutlineColorClass = function (color) {
	    return this.getColorClass(color).indexOf(this.getOutlineColorClass()) > -1;
	  };
	  this.getOutlineColorClass = function(){
	    return this.prefixClass + '-color-outline';
	  }; 

	  this.isDefaultColorClass = function (color) {
	    return this.getColorClass(color).indexOf(this.getDefaultColorClass()) > -1;
	  };
	  this.getDefaultColorClass = function () {
	    return this.prefixClass + '-color-default';
	  };

	  this.isPrimaryColorClass = function (color) {
	    return this.getColorClass(color).indexOf(this.getPrimaryColorClass()) > -1;
	  };
	  this.getPrimaryColorClass = function () {
	    return this.prefixClass + '-color-primary';
	  };

	  this.isSecondaryColorClass = function (color) {
	    return this.getColorClass(color).indexOf(this.getSecondaryColorClass()) > -1;
	  };
	  this.getSecondaryColorClass = function () {
	    return this.prefixClass + '-color-secondary';
	  };

	  this.isInfoColorClass = function (color) {
	    return this.getColorClass(color).indexOf(this.getInfoColorClass()) > -1;
	  };
	  this.getInfoColorClass = function () {
	    return this.prefixClass + '-color-info';
	  };

	  this.isSuccessColorClass = function (color) {
	    return this.getColorClass(color).indexOf(this.getSuccessColorClass()) > -1;
	  };
	  this.getSuccessColorClass = function () {
	    return this.prefixClass + '-color-success';
	  };

	  this.isWarningColorClass = function (color) {
	    return this.getColorClass(color).indexOf(this.getWarningColorClass()) > -1;
	  };
	  this.getWarningColorClass = function () {
	    return this.prefixClass + '-color-warning';
	  };

	  this.isDangerColorClass = function (color) {
	    return this.getColorClass(color).indexOf(this.getDangerColorClass()) > -1;
	  };
	  this.getDangerColorClass = function () {
	    return this.prefixClass + '-color-danger';
	  };

	}

	module.exports = ng.core.Class(new _ngxColorService());

/***/ },
/* 3 */
/***/ function(module, exports) {

	var ngxBootstrap = {};

	var _configs = ngxBootstrap.configs = {};
	_configs.fileService = new fileService();

	ngxBootstrap.ngxCores = {};
	ngxBootstrap.ngxComponents = {};

	function fileService() {
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
	  this.getComponentStyle = function (componentName, styleName) {
	    if (!styleName) { styleName = componentName; }

	    return this.COMPONENTS + componentName + '/css/' +  styleName + '.css';
	  };
	}

	module.exports = ngxBootstrap;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var ngxBootstrap = __webpack_require__(3);

	function _ngxTypeService() {
	  var _TYPES;

	  this.constructor = function () {
	    this.prefixClass = '';
	  };

	  this.getTypeClass = function (types) {
	    if (!types) { return ''; }

	    var _types = types.split(' ');
	    var _type, _funcName, _self = this, _typeClasses = [];

	    ngxBootstrap.forEach(_types, function (type) {
	      _type = type.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
	      _type = _type.charAt(0).toUpperCase() + _type.slice(1);

	      _funcName = 'get' + _type + 'TypeClass';
	      _typeClasses.push(_self[_funcName] ? _self[_funcName]() : _self.prefixClass + '-type-' + _type);
	    });

	    return _typeClasses.length === 0 ? '' : _typeClasses.join(' ');
	  };

	  this.getTypes = function () {
	    if (!_TYPES) {
	      _TYPES = {};
	      var _type;

	      for (var prop in this) {
	        if (typeof this[prop] == 'function' && /get.+TypeClass/.test(prop)) {
	          _type = prop.replace('get', '').replace('TypeClass', '')
	                      .replace(/([A-Z])/g, function (x, y) { return '_' + y; })
	                      .replace(/^_/, '');

	          _TYPES[_type.toUpperCase()] = _type.toLocaleLowerCase().replace(/_/g, '-');
	        }
	      }
	    }

	    return ngxBootstrap.shallowCopy({}, _TYPES);
	  };

	}

	module.exports = ng.core.Class(new _ngxTypeService());

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var ngxBootstrap = __webpack_require__(3);

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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var ngxRenderService = __webpack_require__(7);
	var ngxBootstrap = __webpack_require__(3);
	ngxBootstrap = __webpack_require__(5);

	function _ngxBaseComponent() {
	  this.constructor = [
	    ng.core.ElementRef,
	    ngxRenderService,

	    function (elementRef, ngxRenderService) {
	      this.elementRef = elementRef;
	      
	      this.ngxRenderService = ngxRenderService ? ngxRenderService.for(elementRef.nativeElement) : null;
	    }
	  ];
	  
	  this.ngOnChanges = function (changeRecord) {
	    this.cssClass = this.onBuildCssClass(changeRecord);
	  };

	  this.onBuildCssClass = function(changeRecord){ return ''; };

	  this.getPrevPropertyValue = function (changeRecord, propertyName) {
	    return changeRecord[propertyName] ? (ngxBootstrap.isString(changeRecord[propertyName].previousValue) ? changeRecord[propertyName].previousValue : null) : this[propertyName];
	  };
	  
	  this.getCurrentPropertyValue = function (changeRecord, propertyName) {
	    return changeRecord[propertyName] ? changeRecord[propertyName].currentValue : this[propertyName];
	  };
	  
	  this.removeOneTimeBindingAttributes = function (attributes) {
	    var _self = this,
	        _attributes = ngxBootstrap.isArray(attributes) ? attributes : [attributes];
	        
	    ngxBootstrap.forEach(_attributes, function (attribute) {
	      _self.ngxRenderService.removeAttribute(attribute);
	    });
	  };
	  
	}

	module.exports = ng.core.Class(new _ngxBaseComponent());

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var ngxBootstrap = __webpack_require__(3);

	function _ngxRenderService() {
	  this.constructor = function () {
	    this.domAdapter = new ng.platform.browser.BrowserDomAdapter();
	  };

	  this.for = function (nativeElement) {
	    this.nativeElement = nativeElement;

	    return this;
	  };

	  this.hasClass = function (className) {
	    return this.domAdapter.hasClass(this.nativeElement, className);
	  };
	  this.addClass = function (className) {
	    this.domAdapter.addClass(this.nativeElement, className);
	    return this;
	  };
	  this.insertClass = function (className, index) {
	    if (!className || (index !== 0 && !index) || isNaN(index)) { return this; }

	    var _currentClass = this.getAttribute('class');
	    if (_currentClass) {
	      var _classes = [];
	      ngxBootstrap.forEach(_currentClass.split(' '), function (item) {
	        if (item) { _classes.push(item); }
	      });

	      _classes.splice(index, 0, className);

	      this.setAttribute('class', _classes.join(' '));
	    }

	    return this;
	  };
	  this.removeClass = function (className) {
	    this.domAdapter.removeClass(this.nativeElement, className);
	    return this;
	  };


	  this.hasAttribute = function (attribute) {
	    return this.domAdapter.hasAttribute(this.nativeElement, attribute);
	  };
	  this.getAttribute = function (attribute) {
	    return this.domAdapter.getAttribute(this.nativeElement, attribute);
	  };
	  this.setAttribute = function (attribute, value) {
	    this.domAdapter.setAttribute(this.nativeElement, attribute, value);
	    return this;
	  };
	  this.removeAttribute = function (attribute) {
	    this.domAdapter.removeAttribute(this.nativeElement, attribute);
	    return this;
	  };

	}

	module.exports = ng.core.Class(new _ngxRenderService());

/***/ }
/******/ ])
});
;