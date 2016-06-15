var ngxProgressService = require('./services/progress.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxProgressComponent() {
  var _base;
  var _ATTRIBUTES = {
    VALUE: 'value',
    MAX: 'max'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxProgressService,

    function ngxProgressComponent(elementRef, ngxRenderService, ngxProgressService) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.ngxProgressService = ngxProgressService;
      }
    }
  ];

  this.ngAfterContentInit = function () {
    if (this.value === undefined || this.value === null || isNaN(this.value) || this.value < 0) {
      this.value = 0;
    }

    if (this.max === undefined || this.max === null || isNaN(this.max) || this.max < 0) {
      this.max = 100;
    }

    var _self = this,
        _attributes = [
      _ATTRIBUTES.VALUE,
      _ATTRIBUTES.MAX
        ];

    this.removeOneTimeBindingAttributes(_attributes);

    _getBaseInstance(this).ngAfterContentInit.apply(this);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-progress',
  template: '﻿<progress class=\"ngx-progress-bar\" [value]=\"value\" [max]=\"max\">\r\n  <ng-content></ng-content>\r\n</progress>',
  styles: [':host(.ngx-progress) { display: block; margin: 0 0 1rem 0; width: 100%; height: 1rem; } :host(.ngx-progress) > .ngx-progress-bar[value] { border: 0; width: 100%; appearance: none; } :host(.ngx-progress) > .ngx-progress-bar[value]::-webkit-progress-bar { background-color: #eee; border-radius: 0.25rem; } :host(.ngx-progress) > .ngx-progress-bar[value]::-webkit-progress-value::before { content: attr(value); } :host(.ngx-progress) > .ngx-progress-bar[value]::-webkit-progress-value { background-color: #0074d9; border-bottom-left-radius: 0.25rem; border-top-left-radius: 0.25rem; } :host(.ngx-progress) > .ngx-progress-bar[value="100"]::-webkit-progress-value { border-bottom-right-radius: 0.25rem; border-top-right-radius: 0.25rem; } :host(.ngx-progress).ngx-progress-color-striped > .ngx-progress-bar[value]::-webkit-progress-value { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); background-size: 1rem 1rem; } :host(.ngx-progress).ngx-progress-color-striped > .ngx-progress-bar[value]::-moz-progress-bar { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); background-size: 1rem 1rem; } :host(.ngx-progress).ngx-progress-color-primary > .ngx-progress-bar[value]::-webkit-progress-value { background-color: #0270d2; } :host(.ngx-progress).ngx-progress-color-primary > .ngx-progress-bar[value]::-moz-progress-bar { background-color: #0270d2; } :host(.ngx-progress).ngx-progress-color-info > .ngx-progress-bar[value]::-webkit-progress-value { background-color: #60c2df; } :host(.ngx-progress).ngx-progress-color-info > .ngx-progress-bar[value]::-moz-progress-bar { background-color: #60c2df; } :host(.ngx-progress).ngx-progress-color-success > .ngx-progress-bar[value]::-webkit-progress-value { background-color: #5cb85c; } :host(.ngx-progress).ngx-progress-color-success > .ngx-progress-bar[value]::-moz-progress-bar { background-color: #5cb85c; } :host(.ngx-progress).ngx-progress-color-warning > .ngx-progress-bar[value]::-webkit-progress-value { background-color: #f0ad4e; } :host(.ngx-progress).ngx-progress-color-warning > .ngx-progress-bar[value]::-moz-progress-bar { background-color: #f0ad4e; } :host(.ngx-progress).ngx-progress-color-danger > .ngx-progress-bar[value]::-webkit-progress-value { background-color: #da5350; } :host(.ngx-progress).ngx-progress-color-danger > .ngx-progress-bar[value]::-moz-progress-bar { background-color: #da5350; } '],
  providers: [ngxRenderService],
  properties: ['color', 'value', 'max']
})
.Class(new _ngxProgressComponent());