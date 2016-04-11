(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxProgressService = ng.core.Class(new _ngxProgressService());

  function _ngxProgressService() {
    this.constructor = [
      ngxBootstrap.ngxCores.ngxColorService,
      ngxBootstrap.ngxCores.ngxTypeService,

      function (ngxColorService, ngxTypeService) {
        ngxBootstrap.shallowCopy(this, ngxColorService);
        ngxBootstrap.shallowCopy(this, ngxTypeService);

        this.setPrefix('progress');
      }
    ];

    this.getStripedTypeClass = function () {
      return this.prefix + 'striped';
    };

    this.combineColorWithType = function (color, type) {
      var _typeClass = this.getTypeClass(type);
      var _colorClass = this.getColorClass(color);

      if (_typeClass == this.getStripedTypeClass()) {
        return this.prefix + type + ' ' + _colorClass;
      }
      else {
        return _typeClass ? _colorClass + '-' + _typeClass : _colorClass;
      }
    };
  }

})(window.ngxBootstrap);