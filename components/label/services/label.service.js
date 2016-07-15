(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxLabelServiceClass = ngxLabelService;
  ngxBootstrap.ngxComponents.ngxLabelService = ng.core.Class(new ngxLabelService());

  function ngxLabelService() {
    this.constructor = [
      ngxBootstrap.ngxCores.ngxColorService,
      ngxBootstrap.ngxCores.ngxTypeService,

      function (ngxColorService, ngxTypeService) {
        ngxBootstrap.shallowCopy(this, ngxColorService);
        ngxBootstrap.shallowCopy(this, ngxTypeService);

        this.setPrefix('label');
      }
    ];

    this.getPillTypeClass = function () {
      return 'pill';
    };

    this.combineColorWithType = function (color, type) {
      var _typeClass = this.getTypeClass(type);
      var _colorClass = this.getColorClass(color);

      if (_typeClass == this.getPillTypeClass()) {
        return this.prefix + type + ' ' + _colorClass;
      }
      else {
        return _typeClass ? _colorClass + '-' + _typeClass : _colorClass;
      }
    };
  }

})(window.ngxBootstrap);