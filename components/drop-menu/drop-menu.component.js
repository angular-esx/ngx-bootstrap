var ngxDropMenuService = require('./services/drop-menu.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxBootstrap = require('ngxBootstrap');

function _ngxDropMenuComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,
    ngxDropMenuService,

    function ngxDropMenuComponent(elementRef, renderer, ngxDropMenuService) {
      ngxBaseComponent.apply(this, arguments);

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
      if (!event) { return; }

      var _events = ngxBootstrap.isArray(event) ? event : [event];
      var _actions = _self.ngxDropMenuService.getActions();

      ngxBootstrap.forEach(_events, function (_event) {
        if (!_event.id || _event.id === _self.id) {
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
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-drop-menu',
  template: require('./themes/' + __THEME__ + '/templates/drop-menu.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/drop-menu.scss')],
  properties: ['id', 'position', 'initCssClass:class']
})
.Class(new _ngxDropMenuComponent());