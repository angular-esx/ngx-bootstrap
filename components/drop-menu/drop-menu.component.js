import * as ngCore from '@angular/core';
import { ngxBaseComponent, ngxUtils } from  '../cores';
import ngxDropMenuService from './services/drop-menu.service';

function _ngxDropMenuComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,
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
      if (ngxUtils.isEmpty(event)) { return; }

      var _events = ngxUtils.isArray(event) ? event : [event];
      var _actions = _self.ngxDropMenuService.getActions();

      ngxUtils.forEach(_events, function (_event) {
        if (ngxUtils.isEmpty(_event.id) || _event.id === _self.id) {
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

export var ngxDropMenuComponent = ngCore.Component({
  selector: 'ngx-drop-menu',
  templateUrl: './templates/drop-menu.html',
  styleUrls: ['./scss/drop-menu.scss'],
  properties: ['id', 'position', 'initCssClass:class']
})
.Class(new _ngxDropMenuComponent());