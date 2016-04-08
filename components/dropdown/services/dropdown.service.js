(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxDropdownService = ng.core.Class(new _ngxDropdownService());

  function _ngxDropdownService() {
    var _ACTIONS = {
      TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN'
    };

    this.constructor = [ngxBootstrap.ngxCores.ngxTypeService, function (ngxTypeService) {
      ngxBootstrap.shallowCopy(this, ngxTypeService);

      this.dropdownEmitter = new ng.core.EventEmitter();
    }];

    this.getDropupTypeClass = function () {
      return 'dropup';
    };

    this.subscribe = function (onNext, onError, onCompleted) {
      this.dropdownEmitter.subscribe(onNext, onError, onCompleted);
    };
    this.toggle = function (dropdownId) {
      this.dropdownEmitter.next({ id: dropdownId, type: _ACTIONS.TOGGLE_DROPDOWN });
    };

    this.getActions = function () {
      return ngxBootstrap.shallowCopy({}, _ACTIONS);
    };

  }

})(window.ngxBootstrap);