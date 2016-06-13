var ngxNavbarService = require('./../../components/navbar/services/navbar.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxNavbarComponent() {
  var _base;
  var _ATTRIBUTES = {
    POSITION: 'position'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxNavbarService,

    function ngxNavbarComponent(elementRef, ngxRenderService, ngxNavbarService) {
      ngxBaseComponent.apply(this, arguments);
      if (elementRef) {
        this.ngxNavbarService = ngxNavbarService;
      }
    }
  ];

  this.onAggregatePropertyValueState = function (changeRecord) {
    var _aggregate = _getBaseInstance(this).onAggregatePropertyValueState.apply(this, arguments);

    if (this.ngxNavbarService.getPositionClass) {
      _aggregate[_ATTRIBUTES.POSITION] = {
        prev: this.ngxNavbarService.getPositionClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.POSITION)),
        current: this.ngxNavbarService.getPositionClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.POSITION))
      };
    }

    return _aggregate;
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-navbar',
  template: '﻿<ng-content></ng-content>',
  styles: [':host(.ngx-navbar) { display: block; position: relative; padding: 0.5rem 1rem; } :host(.ngx-navbar)::after { content: ""; display: table; clear: both; } :host(.ngx-navbar).ngx-navbar-position-top, :host(.ngx-navbar).ngx-navbar-position-bottom { position: fixed; right: 0; left: 0; z-index: 1000; } :host(.ngx-navbar).ngx-navbar-position-top { top: 0; } :host(.ngx-navbar).ngx-navbar-position-bottom { bottom: 0; } :host(.ngx-navbar) > .ngx-navbar-divider { color: transparent; float: left; width: 1px; padding: 0.425rem 0 0.425rem 0; margin: 0 1rem 0 1rem; overflow: hidden; } :host(.ngx-navbar) > .ngx-navbar-divider::before { content: "\00a0"; } :host(.ngx-navbar) > .ngx-navbar-brand { float: left; padding: 0.25rem 0 0.25rem 0; margin: 0 0 0 1rem; font-size: 1.25rem; text-decoration: none; } :host(.ngx-navbar) > .ngx-navbar-brand > img { display: block; } :host(.ngx-navbar) > .ngx-navbar-item { display: block; float: left; padding: 0.425rem 0 0.425rem 0; text-decoration: none; } :host(.ngx-navbar) > .ngx-navbar-item + .ngx-navbar-item { margin-left: 1rem; } :host(.ngx-navbar).ngx-navbar-color-primary { background-color: #0270d2; } :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-divider { background-color: white; } :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-brand, :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-brand:focus, :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-brand:hover, :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-brand a, :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-brand a:focus, :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-brand a:hover { color: white; } :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-item, :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-item a { color: rgba(255, 255, 255, 0.5); } :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-item:focus, :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-item:hover, :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-item.ngx-navbar-item-state-active, :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-item a:focus, :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-item a:hover, :host(.ngx-navbar).ngx-navbar-color-primary > .ngx-navbar-item a.ngx-navbar-item-state-active { color: white; } :host(.ngx-navbar).ngx-navbar-color-secondary { background-color: #dfdfdf; } :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-divider { background-color: #373a3c; } :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-brand, :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-brand:focus, :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-brand:hover, :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-brand a, :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-brand a:focus, :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-brand a:hover { color: #373a3c; } :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-item, :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-item a { color: rgba(55, 58, 60, 0.5); } :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-item:focus, :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-item:hover, :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-item.ngx-navbar-item-state-active, :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-item a:focus, :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-item a:hover, :host(.ngx-navbar).ngx-navbar-color-secondary > .ngx-navbar-item a.ngx-navbar-item-state-active { color: #373a3c; } :host(.ngx-navbar).ngx-navbar-color-info { background-color: #60c2df; } :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-divider { background-color: white; } :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-brand, :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-brand:focus, :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-brand:hover, :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-brand a, :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-brand a:focus, :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-brand a:hover { color: white; } :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-item, :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-item a { color: rgba(255, 255, 255, 0.5); } :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-item:focus, :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-item:hover, :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-item.ngx-navbar-item-state-active, :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-item a:focus, :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-item a:hover, :host(.ngx-navbar).ngx-navbar-color-info > .ngx-navbar-item a.ngx-navbar-item-state-active { color: white; } :host(.ngx-navbar).ngx-navbar-color-success { background-color: #5cb85c; } :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-divider { background-color: white; } :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-brand, :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-brand:focus, :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-brand:hover, :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-brand a, :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-brand a:focus, :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-brand a:hover { color: white; } :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-item, :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-item a { color: rgba(255, 255, 255, 0.5); } :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-item:focus, :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-item:hover, :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-item.ngx-navbar-item-state-active, :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-item a:focus, :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-item a:hover, :host(.ngx-navbar).ngx-navbar-color-success > .ngx-navbar-item a.ngx-navbar-item-state-active { color: white; } :host(.ngx-navbar).ngx-navbar-color-warning { background-color: #f0ad4e; } :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-divider { background-color: white; } :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-brand, :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-brand:focus, :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-brand:hover, :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-brand a, :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-brand a:focus, :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-brand a:hover { color: white; } :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-item, :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-item a { color: rgba(255, 255, 255, 0.5); } :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-item:focus, :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-item:hover, :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-item.ngx-navbar-item-state-active, :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-item a:focus, :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-item a:hover, :host(.ngx-navbar).ngx-navbar-color-warning > .ngx-navbar-item a.ngx-navbar-item-state-active { color: white; } :host(.ngx-navbar).ngx-navbar-color-danger { background-color: #da5350; } :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-divider { background-color: white; } :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-brand, :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-brand:focus, :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-brand:hover, :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-brand a, :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-brand a:focus, :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-brand a:hover { color: white; } :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-item, :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-item a { color: rgba(255, 255, 255, 0.5); } :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-item:focus, :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-item:hover, :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-item.ngx-navbar-item-state-active, :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-item a:focus, :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-item a:hover, :host(.ngx-navbar).ngx-navbar-color-danger > .ngx-navbar-item a.ngx-navbar-item-state-active { color: white; } '],
  providers: [ngxRenderService],
  properties: ['color', 'position', 'prefixClass:prefix-class']
})
.Class(new _ngxNavbarComponent());