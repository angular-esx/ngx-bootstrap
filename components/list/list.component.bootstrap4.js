var ngxListService = require('./../../components/list/services/list.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxListComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxListService,

    function ngxListComponent(elementRef, ngxRenderService, ngxListService) {
      ngxBaseComponent.apply(this, arguments);
      if (elementRef) {
        this.ngxListService = ngxListService;
      }
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-list',
  template: '﻿<ng-content></ng-content>',
  styles: ['﻿:host(.ngx-list) { padding-left: 0; margin-bottom: 0; } :host(.ngx-list) > .ngx-list-item { position: relative; display: block; padding: .75rem 1.25rem; margin-bottom: -1px; background-color: #fff; border: 1px solid #ddd; } :host(.ngx-list) > .ngx-list-item > a, :host(.ngx-list) > a.ngx-list-item, :host(.ngx-list) > .ngx-list-item > button, :host(.ngx-list) > button.ngx-list-item { width: 100%; display:block; color: #555; text-align: inherit; } :host(.ngx-list) > .ngx-list-item:focus, :host(.ngx-list) > .ngx-list-item:hover, :host(.ngx-list) > .ngx-list-item > a:focus, :host(.ngx-list) > .ngx-list-item > a:hover, :host(.ngx-list) > a.ngx-list-item:focus, :host(.ngx-list) > a.ngx-list-item:hover, :host(.ngx-list) > .ngx-list-item > button:focus, :host(.ngx-list) > .ngx-list-item > button:hover, :host(.ngx-list) > button.ngx-list-item:focus, :host(.ngx-list) > button.ngx-list-item:hover { color: #555; text-decoration: none; background-color: #f5f5f5; cursor: pointer; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-active, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-active:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-active:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-active > a, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-active > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-active > a:hover, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-state-active, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-state-active:focus, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-state-active:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-active > button, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-active > buttona:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-active > button:hover, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-state-active, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-state-active:focus, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-state-active:hover { z-index: 2; color: #fff; background-color: #0275d8; border-color: #0275d8; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success > a, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-success, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success > button, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-success { color: #3c763d; background-color: #dff0d8; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success > a:hover, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-success:focus, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-success:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success > button:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success > button:hover, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-success:focus, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-success:hover { color: #3c763d; background-color: #d0e9c6; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active > a, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active > a:hover, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active:focus, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active > button, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active > button:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active > button:hover, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active:focus, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active:hover { color: #fff; background-color: #3c763d; border-color: #3c763d; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success > a, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success > a:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active > a, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-success.ngx-list-item-state-active > a:hover { 	background-color: initial; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info > a, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-info, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info > button, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-info { color: #31708f; background-color: #d9edf7; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info > a:hover, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-info:focus, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-info:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info > button:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info > button:hover, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-info:focus, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-info:hover { color: #31708f; background-color: #c4e3f3; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active > a:hover, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active:focus, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active > button:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active > button:hover, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active:focus, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active:hover { color: #fff; background-color: #31708f; border-color: #31708f; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info > a, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info > a:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active > a, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-info.ngx-list-item-state-active > a:hover { 	background-color: initial; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning > a, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-warning, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning > button, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-warning { color: #8a6d3b; background-color: #fcf8e3; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning > a:hover, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-warning:focus, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-warning:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning > button:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning > button:hover, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-warning:focus, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-warning:hover { color: #8a6d3b; background-color: #faf2cc; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active > a, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active > a:hover, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active:focus, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active > button, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active > button:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active > button:hover, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active:focus, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active:hover { color: #fff; background-color: #8a6d3b; border-color: #8a6d3b; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning > a, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning > a:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active > a, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-warning.ngx-list-item-state-active > a:hover { 	background-color: initial; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger > a, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-danger, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger > button, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-danger { color: #a94442; background-color: #f2dede; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger > a:hover, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-danger:focus, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-danger:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger > button:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger > button:hover, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-danger:focus, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-danger:hover { color: #a94442; background-color: #ebcccc; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active > a:hover, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active:focus, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active > button, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active > button:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active > button:hover, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active:focus, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active:hover { color: #fff; background-color: #a94442; border-color: #a94442; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger > a, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger > a:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active > a, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-color-danger.ngx-list-item-state-active > a:hover { 	background-color: initial; } :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-disabled, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-disabled:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-disabled:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-disabled > a, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-disabled > a:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-disabled > a:hover, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-state-disabled, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-state-disabled:focus, :host(.ngx-list) > a.ngx-list-item.ngx-list-item-state-disabled:hover, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-disabled > button, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-disabled > button:focus, :host(.ngx-list) > .ngx-list-item.ngx-list-item-state-disabled > button:hover, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-state-disabled, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-state-disabled:focus, :host(.ngx-list) > button.ngx-list-item.ngx-list-item-state-disabled:hover { color: #818a91; cursor: not-allowed; background-color: #eceeef; } :host(.ngx-list) > .ngx-list-item > h1, :host(.ngx-list) > .ngx-list-item > h2, :host(.ngx-list) > .ngx-list-item > h3, :host(.ngx-list) > .ngx-list-item > h4, :host(.ngx-list) > .ngx-list-item > h5, :host(.ngx-list) > .ngx-list-item > h6 { color: inherit; } :host(.ngx-list) > .ngx-list-item > p { margin-bottom: 0; text-align: inherit; line-height: 1.3; }'],
  providers: [ngxRenderService],
  properties: ['prefixClass:prefix-class']
})
.Class(new _ngxListComponent());