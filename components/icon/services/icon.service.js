function _ngxIconService() {
  var _defaultFontSet = '',
      _iconFontAlias = {};

  var _svgIconConfigs = {},
      _svgIconSetConfigs = {},
      _cachedSvgIcons = {},
      /* Used by _svgIconConfig to coalesce multiple requests to the same URL. */
      _fetchingSvgIcons = {};

  this.constructor = [
    ng.http.Http,

    function ngxIconService(httpService) {
      this.httpService = httpService;
    }
  ];

  this.setDefaultFontSet = function (className) {
    _defaultFontSet = className;
    return this;
  };
  this.getDefaultFontSet = function () {
    return _defaultFontSet;
  };

  this.setIconFontAlias = function (alias, className) {
    _iconFontAlias[alias] = className || alias;
    return this;
  };
  this.getIconFontClass = function (alias) {
    return _iconFontAlias[alias] || alias;
  };


  this.setSvgIcon = function (url, iconName, namespace) {
    _svgIconConfigs[_getIconKey(iconName, namespace)] = new _svgIconConfig(url);
    return this;
  };
  this.getSvgIconByUrl = function (url) {
    if(_cachedSvgIcons[url]){
      return Rx.Observable.of(_cachedSvgIcons[url]);
    }
    
    return new _svgIconConfig(url)
    .getSvgElement(this)
    .do(function (svgElement) {
      _cachedSvgIcons[url] = svgElement;
    });
  };
  this.getSvgIconByName = function (iconName, namespace) {
    var _iconKey = _getIconKey(iconName, namespace);
    
    if(_svgIconConfigs[_iconKey]){
      return _svgIconConfigs[_iconKey]
      .getSvgElement(this)
      .do(function (svgElement) {
        _cachedSvgIcons[_svgIconConfigs[_iconKey].getUrl()] = svgElement;
      });
    }
    
    if(_svgIconSetConfigs[namespace]){
      var _svgIconSets = _svgIconSetConfigs[namespace],
          _svgIconSetsHaveNoElement = [],
          _svgIconSet,
          _svgElement;

      for (var i = 0; i < _svgIconSets.length; i++) {
        _svgIconSet = _svgIconSets[i];

        if(_svgIconSet.hasSvgElement()){
          _svgElement = _svgIconSet.querySvgElement(iconName);
          if(_svgElement){ return Rx.Observable.of(_svgElement); }
        }
        else {
          _svgIconSetsHaveNoElement.push(_svgIconSet);
        } 
      }

      var _getSvgElement$ = [];
      for (i = 0; i < _svgIconSetsHaveNoElement.length; i++) {
        _getSvgElement$.push(_svgIconSets[i].getSvgElement(this));
      }

      return Rx.Observable.forkJoin(_getSvgElement$)
      .map(function () {
        for (var i = 0; i < _svgIconSetsHaveNoElement.length; i++) {
          _svgIconSet = _svgIconSets[i];
          
          if(_svgIconSet.hasSvgElement()){
            _svgElement = _svgIconSet.querySvgElement(iconName);
            if(_svgElement){ return _svgElement; }
          }
        }

        return null;
      });
    }
  };

  this.setSvgIconSet = function (url, namespace) {
    var _namespace = namespace || '';

    if(_svgIconSetConfigs[_namespace]){
      _svgIconSetConfigs[_namespace].push(new _svgIconConfig(url));
    }
    else{
      _svgIconSetConfigs[_namespace] = [new _svgIconConfig(url)];
    }

    return this;
  };


  function _getIconKey(iconName, namespace) {
    return (namespace || '') + ':' + iconName;
  }

  function _svgIconConfig(url) {
    var _svgElement, 
        _url = url;

    this.getUrl = function () { return _url; };

    this.hasSvgElement = function () { return _svgElement !== null && _svgElement !== undefined; };

    this.querySvgElement = function (id) {
      var _result = (_svgElement && id) ? _svgElement.querySelector('#' + id) : null;
      if(!_result){ return null; }

      if (_result.tagName.toLowerCase() === 'svg') {
        return _setAttributes(_result.cloneNode(true));
      }

      _result = _toSvgElement('<svg></svg>').appendChild(_result.cloneNode(true));
      return _setAttributes(_result);
    };

    this.getSvgElement = function (context) {
      if(_svgElement){ 
        return Rx.Observable.of(_svgElement.cloneNode(true)); 
      }

      return _fetch(context, _url)
      .map(function (svgStr) {
        _svgElement = _toSvgElement(svgStr);
        if(!_svgElement){ return null; }

        return _setAttributes(_svgElement).cloneNode(true);
      });
    };

    function _toSvgElement(svgStr) {
      var _div = document.createElement('div');
      _div.innerHTML = svgStr;

      return _div.querySelector('svg');
    }

    function _setAttributes(svgElement) {
      if (!svgElement.getAttribute('xmlns')) {
        svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      }
      svgElement.setAttribute('fit', '');
      svgElement.setAttribute('height', '100%');
      svgElement.setAttribute('width', '100%');
      svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svgElement.setAttribute('focusable', 'false');

      return svgElement;
    }

    function _fetch(context, url) {
      if (_fetchingSvgIcons[url]) {
        return _fetchingSvgIcons[url];
      }

      var _request = context.httpService.get(url)
          .map(function (response) {
            return response.text();
          })
          .finally(function () {
            delete _fetchingSvgIcons[url];
          })
          .share();

      _fetchingSvgIcons[url] = _request;

      return _request;
    }
  }
}

module.exports = ng.core.Class(new _ngxIconService());