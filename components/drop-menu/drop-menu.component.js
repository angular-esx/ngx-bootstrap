var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;
var ngxDropMenuService = require('./services/drop-menu.service.js');

function _ngxDropMenuComponent() {
  var _base;

  this.extends = ngxCore.baseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,
    ngxDropMenuService,

    function ngxDropMenuComponent(elementRef, renderer, ngxDropMenuService) {
      ngxCore.baseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxDropMenuService = ngxDropMenuService;
      }
    }
  ];

  this.ngOnInit = function () {
    this.subscribe();

    _getBaseInstance(this).ngOnInit.apply(this);
  };

  this.ngOnDestroy = function () {
    if (this.subscription) { this.subscription.unsubscribe(); }

    _getBaseInstance(this).ngOnDestroy.apply(this);
  };

  this.getPrefixClass = function(){
    return 'ngx-drop-menu';
  };

  this.subscribe = function () {
    var _self = this;

    this.subscription = this.ngxDropMenuService.ngxDropMenu$.subscribe(function (event) {
      if (ngxUtil.isEmpty(event)) { return; }

      var _events = ngxUtil.isArray(event) ? event : [event];
      var _actions = _self.ngxDropMenuService.getActions();

      ngxUtil.forEach(_events, function (_event) {
        if (ngxUtil.isEmpty(_event.id) || _event.id === _self.id) {
          if (_event.type === _actions.TOGGLE_DROPDOWN) {
            _self.toggleDropdown();
          }
          else if (_event.type === _actions.TOGGLE_DROPUP){
            _self.toggleDropup();
          }
        }
      });
    });
  };

  this.toggleDropdown = function () {
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    this.isActive = !this.isActive;

    _changeRecord = this.buildChangeRecord(_styleProperties.STATE, this.isActive ? 'active' : '');
    this.buildChangeRecord(_styleProperties.TYPE, 'dropdown', null, _changeRecord);

    this.ngOnChanges(_changeRecord);
  };

  this.toggleDropup = function () {
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    this.isActive = !this.isActive;

    _changeRecord = this.buildChangeRecord(_styleProperties.STATE, this.isActive ? 'active' : '');
    this.buildChangeRecord(_styleProperties.TYPE, 'dropup', null, _changeRecord);

    this.ngOnChanges(_changeRecord);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-drop-menu',
  template: require('./themes/' + __THEME__ + '/templates/drop-menu.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/drop-menu.scss')],
  properties: ['id', 'position', 'initCssClass:class']
})
.Class(new _ngxDropMenuComponent());