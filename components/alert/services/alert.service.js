(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxAlertServiceClass = ngxAlertService;
  ngxBootstrap.ngxComponents.ngxAlertService = ng.core.Class(new ngxAlertService());

  function ngxAlertService() {
    var _positions,
        _ACTIONS = {
          SHOW_ALERT: 'SHOW_ALERT',
          DISMISS_ALERT: 'DISMISS_ALERT',
        };

    this.constructor = [
      ngxBootstrap.ngxCores.ngxColorService,
      ngxBootstrap.ngxCores.ngxTypeService,
      ngxBootstrap.ngxCores.ngxStateService,

      function (ngxColorService, ngxTypeService, ngxStateService) {
        ngxBootstrap.shallowCopy(this, ngxColorService);
        ngxBootstrap.shallowCopy(this, ngxTypeService);
        ngxBootstrap.shallowCopy(this, ngxStateService);

        this.setPrefix('alert');
        this.alertEmitter = new ng.core.EventEmitter();
      }
    ];


    this.subscribe = function (onNext, onError, onCompleted) {
      this.alertEmitter.subscribe(onNext, onError, onCompleted);
    };
    this.show = function (alertId) {
      this.alertEmitter.next({ id: alertId, type: _ACTIONS.SHOW_ALERT });
    };
    this.dismiss = function (alertId) {
      this.alertEmitter.next({ id: alertId, type: _ACTIONS.DISMISS_ALERT });
    };


    this.getActions = function () {
      return ngxBootstrap.shallowCopy({}, _ACTIONS);
    };


    this.getPositionClass = function (position) {
      if (!position) {
        return this.getTopPositionClass();
      }

      position = position.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      position = position.charAt(0).toUpperCase() + position.slice(1);

      var _funcName = 'get' + position + 'PositionClass';

      return this[_funcName] ? this[_funcName]() : this.prefix + position;
    };

    this.getPositions = function () {
      if (!_positions) {
        _positions = {};
        var _position;

        for (var prop in this) {
          if (typeof this[prop] == 'function' && /get.+PositionClass/.test(prop)) {
            _position = prop.replace('get', '').replace('PositionClass', '')
                          .replace(/([A-Z])/g, function (x, y) { return '_' + y; })
                          .replace(/^_/, '');

            _positions[_position.toUpperCase()] = _position.toLocaleLowerCase().replace(/_/g, '-');
          }
        }
      }

      return ngxBootstrap.shallowCopy({}, _positions);
    };


    this.getTopPositionClass = function () {
      return this.prefix + 'position-top';
    };
    this.getBottomPositionClass = function () {
      return this.prefix + 'position-bottom';
    };


    this.getHiddenStateClass = function () {
      return 'hidden';
    };

    this.getDismissibleTypeClass = function () {
      return this.prefix + 'dismissible';
    };
    this.getFloatTypeClass = function () {
      return this.prefix + 'float';
    };
    this.getDismissibleFloatTypeClass = function () {
      return this.getDismissibleTypeClass() + ' ' + this.getFloatTypeClass();
    };


    this.isFloatableType = function (type) {
      var _typeClass = this.getTypeClass(type);
      return _typeClass == this.getFloatTypeClass() || _typeClass == this.getDismissibleFloatTypeClass();
    };
    this.isDismissibleType = function (type) {
      var _typeClass = this.getTypeClass(type);
      return _typeClass == this.getDismissibleTypeClass() || _typeClass == this.getDismissibleFloatTypeClass();
    };
    this.isHiddenState = function (state) {
      return this.getStateClass(state) == this.getHiddenStateClass();
    };


    this.combineColorWithType = function (color, type) {
      var _typeClass = this.getTypeClass(type),
          _colorClass = this.getColorClass(color);

      return _typeClass ? _typeClass + ' ' + _colorClass : _colorClass;
    };
  }

})(window.ngxBootstrap);