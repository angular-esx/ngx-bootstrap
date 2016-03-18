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
      var typeClass = this.getTypeClass(type);
      var colorClass = this.getColorClass(color);

      if (typeClass == this.getPillTypeClass()) {
        return this.prefix + type + ' ' + colorClass;
      }
      else {
        return typeClass ? colorClass + '-' + typeClass : colorClass;
      }
    };
  }

})(window.ngxBootstrap);