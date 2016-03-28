(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxButtonService = ng.core.Class(new _ngxButtonService());
  
  function _ngxButtonService() {
    this.constructor = [
      ngxBootstrap.ngxCores.ngxColorService,
      ngxBootstrap.ngxCores.ngxTypeService,
      ngxBootstrap.ngxCores.ngxSizeService,
      ngxBootstrap.ngxCores.ngxStateService,

      function (ngxColorService, ngxTypeService, ngxSizeService, ngxStateService) {
        ngxBootstrap.shallowCopy(this, ngxColorService);
        ngxBootstrap.shallowCopy(this, ngxTypeService);
        ngxBootstrap.shallowCopy(this, ngxSizeService);
        ngxBootstrap.shallowCopy(this, ngxStateService);

        this.setPrefix('btn');
      }
    ];

    this.getSmallBlockSizeClass = function () {
      return this.getSmallSizeClass() + ' ' + this.getBlockSizeClass();
    };
    this.getLargeBlockSizeClass = function () {
      return this.getLargeSizeClass() + ' ' + this.getBlockSizeClass();
    };

    this.isDisabledState = function (state) {
      return state && state === this.getStates().DISABLED;
    };
    this.isActiveState = function (state) {
      return state && state === this.getStates().ACTIVE;
    };

    this.combineColorWithType = function (color, type) {
      var _typeClass = this.getTypeClass(type);
      var _colorClass = this.getColorClass(color);

      return _typeClass ? _colorClass + '-' + _typeClass : _colorClass;
    };
  }

})(window.ngxBootstrap);