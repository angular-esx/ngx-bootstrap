var ngxLabelService = require('./services/label.service.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxLabelComponent() {
  var _base;
  var _ATTRIBUTES = {
    COLOR: 'color',
    TYPE: 'type'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxLabelService,

    function ngxLabelComponent(elementRef, ngxRenderService, ngxLabelService) {
      ngxBaseComponent.apply(this, arguments);

      this.ngxLabelService = ngxLabelService;
    }
  ];
  
  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-label',
  template: "<ng-content></ng-content>",
  styles: `﻿:host(.ngx-label) {
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;
}

:host(.ngx-label):empty {
  display: none;
}

:host(.ngx-label-type-pill) {
  padding-right: .6em;
  padding-left: .6em;
  border-radius: 10rem;
}

:host(.ngx-label-color-primary) {
  background-color: #0275d8;
}

:host(.ngx-label-color-secondary) {
  background-color: #e6e6e6;
}

:host(.ngx-label-color-success) {
  background-color: #5cb85c;
}

:host(.ngx-label-color-info) {
  background-color: #5bc0de;
}

:host(.ngx-label-color-warning) {
  background-color: #f0ad4e;
}

:host(.ngx-label-color-danger) {
  background-color: #d9534f;
}`,
  templateUrl: 'components/label/templates/label.bootstrap4.html',
  styleUrls: ['components/label/css/label.bootstrap4.css'],
  providers: [ngxRenderService],
  properties:['color', 'type']
})
.Class(new _ngxLabelComponent());