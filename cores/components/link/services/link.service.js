(function (ngxBootstrap) {
  ngxBootstrap.ngxCores.ngxLinkService = ng.core.Class(new _ngxLinkService());

  function _ngxLinkService() {
    this.constructor = [
      ngxBootstrap.ngxCores.ngxStateService,

      function (ngxStateService) {
        ngxBootstrap.shallowCopy(this, ngxStateService);

        this.setPrefix('');
      }
    ];

    this.isDisabledState = function (state) {
      return this.getStateClass(state) === this.getStates().DISABLED;
    };

    this.isActiveState = function (state) {
      return this.getStateClass(state) === this.getStates().ACTIVE;
    };
  }

})(window.ngxBootstrap);