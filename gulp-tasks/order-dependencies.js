module.exports = function (params) {
  return function () {
    var _gulp = params.gulp,
        _fileService = params.fileService,
        _streamSeries = params.plugins.streamSeries,
        _jsoncombine = params.plugins.jsoncombine,
        _rimraf = params.plugins.rimraf,
        _componentName = params.args.component;

    var _removeExsitingComponentInfoJSON = _gulp.src(_fileService.FILES.COMPONENTS_INFO_JSON, { read: false })
                                              .pipe(_rimraf({ force: true }));
    
    var _createComponentInfoJSON = _gulp.src(_fileService.getComponentInfos(_componentName))
	                                    .pipe(_jsoncombine(_fileService.FILES.COMPONENTS_INFO_JSON.replace(_fileService.PATHS.COMPONENTS, ''), function (data) {
	                                      var _componentInfos = {}, _componentInfo;

	                                      for (var prop in data) {
	                                        _componentInfo = data[prop];
	                                        for (var key in _componentInfo) {
	                                          _componentInfos[key] = _componentInfo[key];
	                                        }
	                                      }
	                                      
	                                      return new Buffer(JSON.stringify(_orderDependencies(_fileService, _componentInfos)));
	                                    }))
	                                    .pipe(_gulp.dest(_fileService.PATHS.COMPONENTS));

    return _streamSeries(_removeExsitingComponentInfoJSON, _createComponentInfoJSON);

    function _orderDependencies(fileService, componentInfos) {
      var _fileStream = require('fs'),
          _jsonReader = new (function () {
            var _jsonFiles = {};

            this.readJsonFile = function (filePath) {
              if (!_jsonFiles[filePath]) {
                _jsonFiles[filePath] = JSON.parse(_fileStream.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, ''));
              }

              return _jsonFiles[filePath];
            };
          })();
          _orderedDependencies = new (function () {
            var _componentInfos = {};

            this.add = function (key, componentInfo) {
              _componentInfos[key] = componentInfo;
            };
            this.contain = function (key) {
              return _componentInfos[key] != undefined;
            };
            this.getOrderedComponentInfos = function () {
              return _componentInfos;
            };
          })();

      for (var prop in componentInfos) {
        _addComponentInfoAndDependencies(prop, componentInfos[prop]);
      }

      return _orderedDependencies.getOrderedComponentInfos();

      function _addComponentInfoAndDependencies(key, componentInfo) {
        if (!componentInfo) { return; }

        if (componentInfo.dependencies) {
          var _componentKey;
          for (var i = 0; i < componentInfo.dependencies.length; i++) {
            _componentKey = componentInfo.dependencies[i];

            if (_orderedDependencies.contain(_componentKey)) { continue; }
            else {
              _addComponentInfoAndDependencies(_componentKey, _getComponentInfo(_componentKey));
            }
          }
        }

        _orderedDependencies.add(key, componentInfo);
      };

      function _getComponentInfo(key) {
        if (key.indexOf('.component') > -1 || key.indexOf('.service') > -1) {
          var _componentName = key.split('/')[0];
          return _jsonReader.readJsonFile(fileService.PATHS.COMPONENTS + _componentName + '/' + _componentName + '.info.json')[key];
        }

        return null;
      };
    };
  };
}