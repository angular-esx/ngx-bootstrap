var ngxCollapseService = require('./services/collapse.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxBootstrap = require('ngxBootstrap');

function _ngxCollapseComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,
    ngxCollapseService,

    function ngxCollapseComponent(elementRef, renderer, ngxCollapseService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxCollapseService = ngxCollapseService;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    this.isActive = this.propertyHasValue(this.getStyleProperties().STATE, 'active');

    if (this.isActive) {
      _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);
      this.ngxCollapseService.collapseIn(this.elementRef);
    }
    else {
      var _self = this;
      this.ngxCollapseService.collapseOut(this.elementRef)
      .then(function(){
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

  this.getPrefixClass = function () {
    return 'ngx-collapse';
  };

  this.initDefaultValues = function(){
    if(!this.state && !this.isActive){ this.isActive = false; }

    return null;
  };

  this.subscribe = function () {
    var _self = this;
    this.subscription = this.ngxCollapseService.ngxCollapse$.subscribe(function (event) {
      if (!event) { return; }

      var _events = ngxBootstrap.isArray(event) ? event : [event];
      var _actions = _self.ngxCollapseService.getActions();

      ngxBootstrap.forEach(_events, function (_event) {
        if (!_event.id || _self.id === _event.id) {
          if (_event.type === _actions.TOGGLE_COLLAPSE) {
            _self.toggle();
          }
          else if (_event.type === _actions.SHOW_COLLAPSE) {
            _self.show();
          }
          else if (_event.type === _actions.HIDE_COLLAPSE) {
            _self.hide();
          }
        }
        else if (_event.id && _event.group && _event.id !== _self.id && _event.group === _self.group) {
          _self.hide();
        }
      });
    });
  };

  this.toggle = function () {
    if (this.isActive) {
      if (this.group) {
        this.ngxCollapseService.hide(this.id, this.group);
      }
      else {
        this.hide();
      }
    }
    else {
      if (this.group) {
        this.ngxCollapseService.show(this.id, this.group);
      }
      else {
        this.show();
      }
    }
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

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-collapse',
  template: require('./themes/' + __THEME__ + '/templates/collapse.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/collapse.scss')],
  properties: ['id', 'state', 'group', 'initCssClass:class']
})
.Class(new _ngxCollapseComponent());