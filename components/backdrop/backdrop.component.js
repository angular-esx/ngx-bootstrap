var ngxBackdropObserver = require('./services/backdrop-observer.service.js');

function _ngxBackdropComponent() {
  var _base;

  this.extends = ngx.core.baseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,
    ngxBackdropObserver,

    function ngxBackdropComponent(elementRef, renderer, ngxBackdropObserver) {
      ngx.core.baseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxBackdropObserver = ngxBackdropObserver;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    var _self = this;
        _styleProperties = this.getStyleProperties();

    this.isActive = this.propertyHasValue(_styleProperties.STATE, 'active');

    if (this.isActive) {
      _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);

      this.ngxBackdropObserver.fadeIn(this.elementRef);
    }
    else {
      this.ngxBackdropObserver.fadeOut(this.elementRef).then(function () {
        _getBaseInstance(_self).ngOnChanges.apply(_self, [changeRecord]);
      });
    }
  };

  this.ngOnInit = function () {
    this.subscribe();

    _getBaseInstance(this).ngOnInit.apply(this);
  };

  this.ngOnDestroy = function () {
    if (this.subscription) { this.subscription.unsubscribe(); }

    _getBaseInstance(this).ngOnDestroy.apply(this);
  };

  this.initDefaultValues = function () {
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (ngx.isEmpty(this.color)) {
      this.color = 'default';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    }
    
    if (ngx.isEmpty(this.state) && ngx.isNull(this.isActive)) {
      this.isActive = false;
    }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-backdrop';
  };

  this.subscribe = function () {
    var _self = this;

    this.subscription = this.ngxBackdropObserver.ngxBackdrop$.subscribe(function (event) {
      if (ngx.isEmpty(event)) { return; }

      var _events = ngx.isArray(event) ? event : [event];
      var _actions = _self.ngxBackdropObserver.getActions();
      
      ngx.forEach(_events, function (_event) {
        if (_event.type === _actions.SHOW_BACKDROP) {
          _self.show();
        }
        else if (_event.type === _actions.HIDE_BACKDROP) {
          _self.hide();
        }
      });
    });
  };

  this.show = function () {
    if (this.isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    this.addValueToProperty(_styleProperties.STATE, 'active');

    var _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    this.buildChangeRecord(_styleProperties.STATE, this.state, null, _changeRecord);

    this.ngOnChanges(_changeRecord);
  };

  this.hide = function () {
    if (!this.isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    this.removeValueFromProperty(_styleProperties.STATE, 'active');

    var _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    this.buildChangeRecord(_styleProperties.STATE, this.state, null, _changeRecord);

    this.ngOnChanges(_changeRecord);
  };

  this.click = function () {
    this.ngxBackdropObserver.click(this.isActive);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngx.core.baseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-backdrop',
  template: require('./themes/' + __THEME__ + '/templates/backdrop.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/backdrop.scss')],
  properties: ['color', 'initCssClass:class'],
  host: {
    '(click)': 'click()'
  }
})
.Class(new _ngxBackdropComponent());