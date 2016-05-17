var ngxGroupService = require('./services/group.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxGroupComponent() {
  var _base;
  var _ATTRIBUTES = {
    TYPE: 'type',
    SIZE: 'size'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxGroupService,

    function ngxGroupComponent(elementRef, ngxRenderService, ngxGroupService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxGroupService = ngxGroupService;
      }
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-group',
  template: '﻿<ng-content></ng-content>',
  styles: ['﻿:host(.ngx-group){ position: relative; display: inline-block; vertical-align: middle; } :host(.ngx-group) /deep/ .ngx-group{ float: left; } :host(.ngx-group) /deep/ .ngx-group + .ngx-group { margin-left: -1px; } :host(.ngx-group.ngx-group-type-vertical) /deep/ > .ngx-group { display: block; float: none; width: 100%; max-width: 100%; } :host(.ngx-group.ngx-group-type-vertical) /deep/ > .ngx-group::after { display: table; clear: both; content: ""; } :host(.ngx-group.ngx-group-type-vertical) /deep/ > .ngx-group + .ngx-group { margin-top: -1px; margin-left: 0; } /*ngxButton*/ :host(.ngx-group) /deep/ .ngx-button { position: relative; float: left; } :host(.ngx-group) /deep/ .ngx-button + .ngx-button, :host(.ngx-group) /deep/ .ngx-button + .ngx-group, :host(.ngx-group) /deep/ .ngx-group + .ngx-button { margin-left: -1px; } :host(.ngx-group) /deep/ .ngx-button:not(:first-child):not(:last-child):not(.ngx-toggle-dropdown):not(.ngx-toggle-dropup) { border-radius: 0; } :host(.ngx-group) /deep/ .ngx-button:first-child { margin-left: 0; } :host(.ngx-group) /deep/ .ngx-button:first-child:not(:last-child):not(.ngx-toggle-dropdown):not(.ngx-toggle-dropup) { border-top-right-radius: 0; border-bottom-right-radius: 0; } :host(.ngx-group) /deep/ .ngx-button:last-child:not(:first-child), :host(.ngx-group) /deep/ .ngx-toggle-dropdown:not(:first-child), :host(.ngx-group) /deep/ .ngx-toggle-dropup:not(:first-child) { border-top-left-radius: 0; border-bottom-left-radius: 0; } :host(.ngx-group) /deep/ .ngx-group:not(:first-child):not(:last-child) > .ngx-button { border-radius: 0; } :host(.ngx-group) /deep/ .ngx-group:first-child:not(:last-child) > .ngx-button:last-child, :host(.ngx-group) /deep/ .ngx-group:first-child:not(:last-child) > .ngx-toggle-dropdown, :host(.ngx-group) /deep/ .ngx-group:first-child:not(:last-child) > .ngx-toggle-dropup { border-top-right-radius: 0; border-bottom-right-radius: 0; } :host(.ngx-group) /deep/ .ngx-group:last-child:not(:first-child) > .ngx-button:first-child { border-top-left-radius: 0; border-bottom-left-radius: 0; } :host(.ngx-group) /deep/ .ngx-button + .ngx-toggle-dropdown, :host(.ngx-group) /deep/ .ngx-button + .ngx-toggle-dropup { padding-right: 8px; padding-left: 8px; } :host(.ngx-group.ngx-group-size-large) /deep/ .ngx-button { padding: .75rem 1.25rem; font-size: 1.25rem; line-height: 1.333333; border-radius: .3rem; } :host(.ngx-group.ngx-group-size-small) /deep/ .ngx-button { padding: .25rem .75rem; font-size: .875rem; line-height: 1.5; border-radius: .2rem; } :host(.ngx-group) /deep/ .ngx-button-size-large + .ngx-toggle-dropdown, :host(.ngx-group) /deep/ .ngx-button-size-large + .ngx-toggle-dropup, :host(.ngx-group.ngx-group-size-large) /deep/ .ngx-button + .ngx-toggle-dropdown, :host(.ngx-group.ngx-group-size-large) /deep/ .ngx-button + .ngx-toggle-dropup { padding-right: 12px; padding-left: 12px; } :host(.ngx-group.ngx-group-type-vertical) /deep/ .ngx-button, :host(.ngx-group.ngx-group-type-vertical) /deep/ .ngx-group > .ngx-button { display: block; float: none; width: 100%; max-width: 100%; } :host(.ngx-group.ngx-group-type-vertical) /deep/ .ngx-group > .ngx-button { float: none; } :host(.ngx-group.ngx-group-type-vertical) /deep/ .ngx-button + .ngx-button, :host(.ngx-group.ngx-group-type-vertical) /deep/ .ngx-button + .ngx-group, :host(.ngx-group.ngx-group-type-vertical) /deep/ .ngx-group + .ngx-button { margin-top: -1px; margin-left: 0; } :host(.ngx-group.ngx-group-type-vertical /deep/ ).ngx-button:not(:first-child):not(:last-child) { border-radius: 0; } :host(.ngx-group.ngx-group-type-vertical) /deep/ .ngx-button:first-child:not(:last-child) { border-top-right-radius: .25rem; border-bottom-right-radius: 0; border-bottom-left-radius: 0; } :host(.ngx-group.ngx-group-type-vertical) /deep/ .ngx-button:last-child:not(:first-child) { border-top-left-radius: 0; border-top-right-radius: 0; border-bottom-left-radius: .25rem; } :host(.ngx-group.ngx-group-type-vertical) /deep/ .ngx-group:not(:first-child):not(:last-child) > .ngx-button { border-radius: 0; } :host(.ngx-group.ngx-group-type-vertical) /deep/ .ngx-group:first-child:not(:last-child) > .ngx-button:last-child, :host(.ngx-group.ngx-group-type-vertical) /deep/ .ngx-group:first-child:not(:last-child) > .ngx-toggle-dropdown, :host(.ngx-group.ngx-group-type-vertical) /deep/ .ngx-group:first-child:not(:last-child) > .ngx-toggle-dropup { border-bottom-right-radius: 0; border-bottom-left-radius: 0; } :host(.ngx-group.ngx-group-type-vertical) /deep/ .ngx-group:last-child:not(:first-child) > .ngx-button:first-child { border-top-left-radius: 0; border-top-right-radius: 0; }'],
  providers: [ngxRenderService],
  properties: ['type', 'size', 'prefixClass:prefix-class']
})
.Class(new _ngxGroupComponent());