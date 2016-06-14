var ngxGroupService = require('./services/group.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxGroupComponent() {
  var _base;

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
  styles: [':host(.ngx-group) { position: relative; display: inline-block; vertical-align: middle; } :host(.ngx-group) > .ngx-group { float: left; } :host(.ngx-group) > .ngx-group + .ngx-group { margin-left: -1px; } :host(.ngx-group).ngx-group-type-vertical > .ngx-group { display: block; float: none; width: 100%; max-width: 100%; } :host(.ngx-group).ngx-group-type-vertical > .ngx-group::after { content: ""; display: table; clear: both; } :host(.ngx-group).ngx-group-type-vertical > .ngx-group + .ngx-group { margin-left: -1px; margin-left: 0; } :host(.ngx-group) > .ngx-button { position: relative; float: left; } :host(.ngx-group) > .ngx-button + .ngx-button, :host(.ngx-group) > .ngx-button + .ngx-group, :host(.ngx-group) > .ngx-group + .ngx-button { margin-left: -1px; } :host(.ngx-group) > .ngx-button:not(:first-child):not(:last-child):not(.ngx-toggle-dropdown):not(.ngx-toggle-dropup) { border-radius: 0; } :host(.ngx-group) > .ngx-button:first-child { margin-left: 0; } :host(.ngx-group) > .ngx-button:first-child:not(:last-child):not(.ngx-toggle-dropdown):not(.ngx-toggle-dropup) { border-bottom-right-radius: 0; border-top-right-radius: 0; } :host(.ngx-group) > .ngx-button:last-child:not(:first-child), :host(.ngx-group) > .ngx-toggle-dropdown:not(:first-child), :host(.ngx-group) > .ngx-toggle-dropup:not(:first-child) { border-bottom-left-radius: 0; border-top-left-radius: 0; } :host(.ngx-group) > .ngx-button + .ngx-toggle-dropdown, :host(.ngx-group) > .ngx-button + .ngx-toggle-dropup { padding-right: 8px; padding-left: 8px; } :host(.ngx-group) > .ngx-group:not(:first-child):not(:last-child) > .ngx-button { border-radius: 0; } :host(.ngx-group) > .ngx-group:first-child:not(:last-child) > .ngx-button:last-child, :host(.ngx-group) > .ngx-group:first-child:not(:last-child) > .ngx-toggle-dropdown, :host(.ngx-group) > .ngx-group:first-child:not(:last-child) > .ngx-toggle-dropup { border-bottom-right-radius: 0; border-top-right-radius: 0; } :host(.ngx-group) > .ngx-group:last-child:not(:first-child) > .ngx-button:first-child { border-bottom-left-radius: 0; border-top-left-radius: 0; } :host(.ngx-group).ngx-group-size-small > .ngx-button { font-size: 0.875rem; line-height: 1.5; padding: 0.25rem 0.75rem; border-radius: 0.2rem; } :host(.ngx-group).ngx-group-size-large > .ngx-button { font-size: 1.25rem; line-height: 1.33333; padding: 0.75rem 1.25rem; border-radius: 0.3rem; } :host(.ngx-group) > .ngx-button-size-large + .ngx-toggle-dropdown, :host(.ngx-group) > .ngx-button-size-large + .ngx-toggle-dropup, :host(.ngx-group).ngx-group-size-large > .ngx-button + .ngx-toggle-dropdown, :host(.ngx-group).ngx-group-size-large > .ngx-button + .ngx-toggle-dropup { padding-right: 12px; padding-left: 12px; } :host(.ngx-group).ngx-group-type-vertical > .ngx-button, :host(.ngx-group).ngx-group-type-vertical > .ngx-group > .ngx-button { display: block; float: none; width: 100%; max-width: 100%; } :host(.ngx-group).ngx-group-type-vertical > .ngx-button:not(:first-child):not(:last-child) { border-radius: 0; } :host(.ngx-group).ngx-group-type-vertical > .ngx-button:first-child:not(:last-child) { border-bottom-right-radius: 0.25rem; border-top-right-radius: 0.25rem; border-bottom-right-radius: 0; border-bottom-left-radius: 0; } :host(.ngx-group).ngx-group-type-vertical > .ngx-button:last-child:not(:first-child) { border-bottom-left-radius: 0.25rem; border-top-left-radius: 0.25rem; border-top-right-radius: 0; border-top-left-radius: 0; } :host(.ngx-group).ngx-group-type-vertical > .ngx-button + .ngx-button, :host(.ngx-group).ngx-group-type-vertical > .ngx-button + .ngx-group, :host(.ngx-group).ngx-group-type-vertical > .ngx-group + .ngx-button { margin-top: -1px; margin-left: 0; } :host(.ngx-group).ngx-group-type-vertical > .ngx-group::after { content: ""; display: table; clear: both; } :host(.ngx-group).ngx-group-type-vertical > .ngx-group > .ngx-button { float: none; } :host(.ngx-group).ngx-group-type-vertical > .ngx-group:not(:first-child):not(:last-child) > .ngx-button { border-radius: 0; } :host(.ngx-group).ngx-group-type-vertical > .ngx-group:first-child:not(:last-child) > .ngx-button:last-child, :host(.ngx-group).ngx-group-type-vertical > .ngx-group:first-child:not(:last-child) > .ngx-toggle-dropdown, :host(.ngx-group).ngx-group-type-vertical > .ngx-group:first-child:not(:last-child) > .ngx-toggle-dropup { border-bottom-right-radius: 0; border-bottom-left-radius: 0; } :host(.ngx-group).ngx-group-type-vertical > .ngx-group:last-child:not(:first-child) > .ngx-button:first-child { border-top-right-radius: 0; border-top-left-radius: 0; } '],
  providers: [ngxRenderService],
  properties: ['type', 'size', 'prefixClass:prefix-class']
})
.Class(new _ngxGroupComponent());