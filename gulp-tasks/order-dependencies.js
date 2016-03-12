module.exports = function (params) {
  return function () {
    var _gulp = params.gulp,
        _fileService = params.fileService,
        _streamSeries = params.plugins.streamSeries,
        _jsoncombine = params.plugins.jsoncombine,
        _rimraf = params.plugins.rimraf,
        _componentName = params.args.component;

    var _removeExsitingCoreInfoJSON = _getStreamForRemoveInfoJSON(_fileService.FILES.CORES_INFO_JSON);

    var _createCoreInfoJSON = _getStreamForCreateInfoJSON(_fileService.PATHS.CORES, _fileService.getCoreInfos(), _fileService.FILES.CORES_INFO_JSON);

    var _removeExsitingComponentInfoJSON = _getStreamForRemoveInfoJSON(_fileService.FILES.COMPONENTS_INFO_JSON);
    
    var _createComponentInfoJSON = _getStreamForCreateInfoJSON(_fileService.PATHS.COMPONENTS, _fileService.getComponentInfos(_componentName), _fileService.FILES.COMPONENTS_INFO_JSON);


    return _streamSeries
    (
      _removeExsitingCoreInfoJSON, _createCoreInfoJSON,
      _removeExsitingComponentInfoJSON, _createComponentInfoJSON
    );


    function _getStreamForRemoveInfoJSON(outputInfo) {
      return _gulp.src(outputInfo, { read: false }).pipe(_rimraf({ force: true }));
    };

    function _getStreamForCreateInfoJSON(rootFolder, inputInfos, outputInfo) {
      return _gulp.src(inputInfos)
	                .pipe(_jsoncombine(outputInfo.replace(rootFolder, ''), function (data) {
	                  var _infos = {}, _info;

	                  for (var prop in data) {
	                    _info = data[prop];
	                    for (var key in _info) {
	                      _infos[key] = _info[key];
	                    }
	                  }

	                  return new Buffer(JSON.stringify(_orderDependencies(rootFolder, _infos)));
	                }))
	                .pipe(_gulp.dest(rootFolder));
    };

    function _orderDependencies(rootFolder, infos) {
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
            var _infos = {};

            this.add = function (key, info) {
              _infos[key] = info;
            };
            this.contain = function (key) {
              return _infos[key] != undefined;
            };
            this.getOrderedInfos = function () {
              return _infos;
            };
          })();

      for (var prop in infos) {
        _addInfoAndDependencies(rootFolder, prop, infos[prop]);
      }

      return _orderedDependencies.getOrderedInfos();

      function _addInfoAndDependencies(rootFolder, key, info) {
        if (!info) { return; }

        if (info.dependencies) {
          var _Key;
          for (var i = 0; i < info.dependencies.length; i++) {
            _Key = info.dependencies[i];

            if (!_orderedDependencies.contain(_Key)) {
              _addInfoAndDependencies(rootFolder, _Key, _getInfo(rootFolder, _Key));
            }
          }
        }

        _orderedDependencies.add(key, info);
      };

      function _getInfo(rootFolder, key) {
        if (key.indexOf('.component') > -1 || key.indexOf('.service') > -1) {
          var _subFolder = key.split('/')[0];
          return _jsonReader.readJsonFile(rootFolder + _subFolder + '/' + _subFolder + '.info.json')[key];
        }

        return null;
      };
    };
  };
}