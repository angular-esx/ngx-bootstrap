var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;
var ngxModalService = require('./services/modal.service.js');
var ngxBackdrop = require('../../components/backdrop/index.js');

function _ngxModalComponent() {
  var _base;

  this.extends = ngxCore.baseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,
    ngxModalService,
    ngxBackdrop.backdropService,

    function ngxModalComponent(elementRef, renderer, ngxModalService, ngxBackdropService) {
      ngxCore.baseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxModalService = ngxModalService;
        this.ngxBackdropService = ngxBackdropService;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    if (ngxUtil.isEmpty(this.id)) { throw 'Must provide id to ngxModal'; }

    var _self = this;
    _styleProperties = this.getStyleProperties();

    this.isActive = this.propertyHasValue(_styleProperties.STATE, 'active');

    if (ngxUtil.isNull(this.state)) {
      _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);
      return;
    }

    var _classes = document.body.className.split(' ');

    if (this.isActive) {
      _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);
  
      _classes.push(this.buildCssClassForProperty(_styleProperties.STATE, this.state));

      this.renderer.setElementProperty(document.body, 'className', _classes.join(' ').trim());

      this.ngxBackdropService.show();

      this.ngxModalService.fadeIn(this.elementRef);
    }
    else {
      this.ngxBackdropService.hide();

      ngxUtil.splice(_classes, this.getPrefixClass(), function (prefixClass, cssClass) {
        return cssClass.indexOf(prefixClass) === 0;
      });

      this.ngxModalService.fadeOut(this.elementRef).then(function () {
        _getBaseInstance(_self).ngOnChanges.apply(_self, [changeRecord]);

        _self.renderer.setElementProperty(document.body, 'className', _classes.join(' ').trim());
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
    if (ngxUtil.isEmpty(this.state) && ngxUtil.isNull(this.isActive)) {
      this.isActive = false;
    }

    return null;
  };

  this.getPrefixClass = function () {
    return 'ngx-modal';
  };

  this.subscribe = function () {
    var _self = this;

    this.subscription = this.ngxModalService.ngxModal$.subscribe(function (event) {
      if (ngxUtil.isEmpty(event)) { return; }

      var _events = ngxUtil.isArray(event) ? event : [event];
      var _actions = _self.ngxModalService.getActions();

      ngxUtil.forEach(_events, function (_event) {
        if (!ngxUtil.isEmpty(_event.id) && _event.id === _self.id) {
          if (_event.type === _actions.SHOW_MODAL) {
            _self.show();
          }
          else if (_event.type === _actions.HIDE_MODAL) {
            _self.hide();
          }
        }
      });
    });
  };

  this.show = function () {
    if (this.isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    this.addValueToProperty(_styleProperties.STATE, 'active');

    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  };

  this.hide = function () {
    if (!this.isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    this.removeValueFromProperty(_styleProperties.STATE, 'active');

    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  };

  this.click = function (event) {
    if
    (
        !ngxUtil.isEmpty(this.id) && this.id == event.target.id &&
        this.isActive &&
        !this.propertyHasValue(this.getStyleProperties().TYPE, 'static')
    ) {
      this.hide();
    }
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-modal',
  template: require('./themes/' + __THEME__ + '/templates/modal.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/modal.scss')],
  properties: ['id', 'type', 'size', 'backdropColor:backdrop-color', 'initCssClass:class'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxModalComponent());