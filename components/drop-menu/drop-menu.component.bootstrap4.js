var ngxDropMenuService = require('./services/drop-menu.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxDropMenuComponent() {
  var _base;
  var _ATTRIBUTES = {
    ID: 'id',
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxDropMenuService,

    function ngxDropMenuComponent(elementRef, ngxRenderService, ngxDropMenuService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxDropMenuService = ngxDropMenuService;

        var _self = this;
        this.ngxDropMenuService.subscribe(
          function (event) {
            if (!event || !event.id || _self.id == event.id) {
              var _actions = _self.ngxDropMenuService.getActions();

              if (event.action === _actions.TOGGLE_DROPDOWN || event.action === _actions.TOGGLE_DROPUP) {
                _self.toggle(event.action);
              }
            }
          },
          function (error) {
            console.error('ngxDropMenuService', error);
          });
      }
    }
  ];

  this.toggle = function (action) {
    var _isActive = this.ngxDropMenuService.isActiveStateClass(this.getPrefixClass(), this.state);
    var _types = this.ngxDropMenuService.getTypes();

    var _changeRecord = {
      state: { previousValue: this.state || '' },
      type: { previousValue: this.type || '' }
    };
    if (_isActive) {
      this.state = this.state.replace(this.ngxDropMenuService.getStates().ACTIVE, '').trim();
    }
    else {
      this.state = (this.ngxDropMenuService.getStates().ACTIVE + ' ' + _changeRecord.state.previousValue).trim();
    }
    _changeRecord.state.currentValue = this.state;

    if(_changeRecord.type.previousValue){
      _changeRecord.type.previousValue = this.type = this.type.replace(_types.DROPDOWN, '').replace(_types.DROPUP, '').trim();
    }
    if (action === this.ngxDropMenuService.getActions().TOGGLE_DROPUP) {
      this.type = (_types.DROPUP + ' ' + _changeRecord.state.previousValue).trim();
    }
    else {
      this.type = (_types.DRODOWN + ' ' + _changeRecord.state.previousValue).trim();
    }
    _changeRecord.type.currentValue = this.type;

    this.ngOnChanges(_changeRecord);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-drop-menu',
  template: '﻿<ng-content></ng-content>',
  styles: [':host(.ngx-drop-menu) { position: absolute; top: 100%; left: 0; z-index: 1000; display: none; float: left; min-width: 160px; padding: 5px 0; margin: 2px 0 0; font-size: 1rem; color: #373a3c; text-align: left; list-style: none; background-color: #fff; -webkit-background-clip: padding-box; background-clip: padding-box; border: 1px solid rgba(0, 0, 0, 0.15); border-radius: .25rem; } :host(.ngx-drop-menu-state-active) { display: block; } :host(.ngx-drop-menu-type-dropup) { top: auto; bottom: 100%; margin-bottom: 2px; } :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item, :host(.ngx-drop-menu) /deep/ .ngx-item, :host(.ngx-drop-menu) /deep/ .ngx-link, :host(.ngx-drop-menu) /deep/ a.ngx-drop-menu-item { display: block; width: 100%; padding: 3px 20px; clear: both; font-weight: normal; line-height: 1.5; color: #373a3c; text-align: inherit; white-space: nowrap; background: none; border: 0; cursor: pointer; } :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item > a, :host(.ngx-drop-menu) /deep/ .ngx-link > a { color: #373a3c; } :host(.ngx-drop-menu-state-active) /deep/ .ngx-drop-menu-item > a, :host(.ngx-drop-menu-state-active) /deep/ .ngx-link > a :host(.ngx-drop-menu-state-active) /deep/ a.ngx-drop-menu-item { color: #373a3c; outline: 0; } :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item:focus, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item:hover, :host(.ngx-drop-menu) /deep/ .ngx-item:focus, :host(.ngx-drop-menu) /deep/ .ngx-item:hover, :host(.ngx-drop-menu) /deep/ .ngx-link:focus, :host(.ngx-drop-menu) /deep/ .ngx-link:hover, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item:focus, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item:hover, :host(.ngx-drop-menu) /deep/ a.ngx-drop-menu-item:focus, :host(.ngx-drop-menu) /deep/ a.ngx-drop-menu-item:hover { color: #2b2d2f; text-decoration: none; background-color: #f5f5f5; } :host(.ngx-drop-menu) /deep/ .ngx-link:focus > a, :host(.ngx-drop-menu) /deep/ .ngx-link:hover > a, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item:focus > a, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item:hover > a { color: #2b2d2f; text-decoration: none; } :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-active, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-active:focus, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-active:hover, :host(.ngx-drop-menu) /deep/ .ngx-item.ngx-item-state-active, :host(.ngx-drop-menu) /deep/ .ngx-item.ngx-item-state-active:focus, :host(.ngx-drop-menu) /deep/ .ngx-item.ngx-item-state-active:hover, :host(.ngx-drop-menu) /deep/ .ngx-link.ngx-link-state-active, :host(.ngx-drop-menu) /deep/ .ngx-link.ngx-link-state-active:focus, :host(.ngx-drop-menu) /deep/ .ngx-link.ngx-link-state-active:hover, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-active, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-active:focus, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-active:hover, :host(.ngx-drop-menu) /deep/ a.ngx-drop-menu-item.ngx-drop-menu-item-state-active:focus, :host(.ngx-drop-menu) /deep/ a.ngx-drop-menu-item.ngx-drop-menu-item-state-active:hover { color: #fff; text-decoration: none; background-color: #0275d8; outline: 0; } :host(.ngx-drop-menu) /deep/ .ngx-link.ngx-link-state-active > a, :host(.ngx-drop-menu) /deep/ .ngx-link.ngx-link-state-active:focus > a, :host(.ngx-drop-menu) /deep/ .ngx-link.ngx-link-state-active:hover > a, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-active > a, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-active:focus > a, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-active:hover > a { color: #fff; text-decoration: none; } :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-disabled, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-disabled:focus, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-disabled:hover, :host(.ngx-drop-menu) /deep/ .ngx-item.ngx-item-state-disabled, :host(.ngx-drop-menu) /deep/ .ngx-item.ngx-item-state-disabled:focus, :host(.ngx-drop-menu) /deep/ .ngx-item.ngx-item-state-disabled:hover, :host(.ngx-drop-menu) /deep/ .ngx-link.ngx-link-state-disabled > a, :host(.ngx-drop-menu) /deep/ .ngx-link.ngx-link-state-disabled:focus > a, :host(.ngx-drop-menu) /deep/ .ngx-link.ngx-link-state-disabled:hover > a, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-disabled > a, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-disabled:focus > a, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-disabled:hover > a, :host(.ngx-drop-menu) /deep/ a.ngx-drop-menu-item.ngx-drop-menu-item-state-disabled, :host(.ngx-drop-menu) /deep/ a.ngx-drop-menu-item.ngx-drop-menu-item-state-disabled:focus, :host(.ngx-drop-menu) /deep/ a.ngx-drop-menu-item.ngx-drop-menu-item-state-disabled:hover { color: #818a91; } :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-disabled:focus, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-disabled:hover, :host(.ngx-drop-menu) /deep/ .ngx-item.ngx-item-state-disabled:focus, :host(.ngx-drop-menu) /deep/ .ngx-item.ngx-item-state-disabled:hover, :host(.ngx-drop-menu) /deep/ .ngx-link.ngx-link-state-disabled:focus > a, :host(.ngx-drop-menu) /deep/ .ngx-link.ngx-link-state-disabled:hover > a, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-disabled:focus > a, :host(.ngx-drop-menu) /deep/ .ngx-drop-menu-item.ngx-drop-menu-item-state-disabled:hover > a, :host(.ngx-drop-menu) /deep/ a.ngx-drop-menu-item.ngx-drop-menu-item-state-disabled:focus, :host(.ngx-drop-menu) /deep/ a.ngx-drop-menu-item.ngx-drop-menu-item-state-disabled:hover { text-decoration: none; cursor: not-allowed; background-color: transparent; background-image: none; filter: "progid:DXImageTransform.Microsoft.gradient(enabled = false)"; } :host(.ngx-drop-menu) /deep/ h1, :host(.ngx-drop-menu) /deep/ h2, :host(.ngx-drop-menu) /deep/ h3, :host(.ngx-drop-menu) /deep/ h4, :host(.ngx-drop-menu) /deep/ h5, :host(.ngx-drop-menu) /deep/ h6 { display: block; padding: 3px 20px; font-size: .875rem; line-height: 1.5; color: #818a91; white-space: nowrap; } :host(.ngx-drop-menu) /deep/ hr { height: 1px; margin: .5rem 0; overflow: hidden; background-color: #e5e5e5; } :host-context(body) .ngx-toggle-dropdown::after { display: inline-block; width: 0; height: 0; margin-right: .25rem; margin-left: .25rem; vertical-align: middle; content: ""; border-top: .3em solid; border-right: .3em solid transparent; border-left: .3em solid transparent; } :host-context(body) .ngx-toggle-dropdown:focus { outline: 0; } :host-context(body) .ngx-toggle-dropup::after { display: inline-block; width: 0; height: 0; margin-right: .25rem; margin-left: .25rem; vertical-align: middle; content: ""; border-right: .3em solid transparent; border-left: .3em solid transparent; border-bottom: .3em solid; } :host-context(body) .ngx-toggle-dropup { outline: 0; } '],
  providers: [ngxRenderService],
  properties: ['id', 'state', 'prefixClass:prefix-class']
})
.Class(new _ngxDropMenuComponent());