var ngxProgressService = require('./services/progress.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxProgressComponent() {
  var _base;
  var _ATTRIBUTES = {
    COLOR: 'color',
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

  this.ngOnInit = function () {
    if (this.elementRef) {
      if (this.value === undefined || this.value === null || isNaN(this.value) || this.value < 0) {
        this.value = 0;
      }

      if (this.max === undefined || this.max === null || isNaN(this.max) || this.max < 0) {
        this.max = 100;
      }
    }
  };

  this.ngAfterViewInit = function () {
    _getBaseInstance(this).ngAfterViewInit.apply(this);

    var _self = this,
        _attributes = [
      _ATTRIBUTES.VALUE,
      _ATTRIBUTES.MAX
    ];

    this.removeOneTimeBindingAttributes(_attributes);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-progress',
  template: '﻿<progress class=\"ngx-progress-bar\" [value]=\"value\" [max]=\"max\">\r\n  <ng-content></ng-content>\r\n</progress>',
  styles: ['﻿:host(.ngx-progress) { display: block; width: 100%; height: 1rem; margin-bottom: 1rem; } :host(.ngx-progress) > .ngx-progress-bar[value] { -webkit-appearance: none; -moz-appearance: none; appearance: none; color: #0074d9; border: 0; width: 100%; } :host(.ngx-progress) > .ngx-progress-bar[value]::-webkit-progress-bar { background-color: #eee; border-radius: .25rem; } :host(.ngx-progress) > .ngx-progress-bar[value]::-webkit-progress-value::before { content: attr(value); } :host(.ngx-progress) > .ngx-progress-bar[value]::-webkit-progress-value { background-color: #0074d9; border-top-left-radius: .25rem; border-bottom-left-radius: .25rem; } :host(.ngx-progress) > .ngx-progress-bar[value="100"]::-webkit-progress-value { border-top-right-radius: .25rem; border-bottom-right-radius: .25rem; } @media screen and (min-width: 0\0) { :host(.ngx-progress) { background-color: #eee; border-radius: .25rem; } :host(.ngx-progress) > .ngx-progress-bar[width^="0"] { min-width: 2rem; color: #818a91; background-color: transparent; background-image: none; } :host(.ngx-progress) > .ngx-progress-bar[width="100%"] { border-top-right-radius: .25rem; border-bottom-right-radius: .25rem; } } :host(.ngx-progress.ngx-progress-color-striped) > .ngx-progress-bar[value]::-webkit-progress-value { background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent); background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent); -webkit-background-size: 1rem 1rem; background-size: 1rem 1rem; } :host(.ngx-progress.ngx-progress-color-striped) > .ngx-progress-bar[value]::-moz-progress-bar { background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent); background-size: 1rem 1rem; } :host(.ngx-progress.ngx-progress-color-success) > .ngx-progress-bar[value]::-webkit-progress-value { background-color: #5cb85c; } :host(.ngx-progress.ngx-progress-color-success) > .ngx-progress-bar[value]::-moz-progress-bar { background-color: #5cb85c; } :host(.ngx-progress.ngx-progress-color-info) > .ngx-progress-bar[value]::-webkit-progress-value { background-color: #5bc0de; } :host(.ngx-progress.ngx-progress-color-info) > .ngx-progress-bar[value]::-moz-progress-bar { background-color: #5bc0de; } :host(.ngx-progress.ngx-progress-color-warning) > .ngx-progress-bar[value]::-webkit-progress-value { background-color: #f0ad4e; } :host(.ngx-progress.ngx-progress-color-warning) > .ngx-progress-bar[value]::-moz-progress-bar { background-color: #f0ad4e; } :host(.ngx-progress.ngx-progress-color-danger) > .ngx-progress-bar[value]::-webkit-progress-value { background-color: #d9534f; } :host(.ngx-progress.ngx-progress-color-danger) > .ngx-progress-bar[value]::-moz-progress-bar { background-color: #d9534f; }'],
  providers: [ngxRenderService],
  properties: ['color', 'value', 'max']
})
.Class(new _ngxProgressComponent());