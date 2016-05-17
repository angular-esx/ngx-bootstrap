var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxJumbotronComponent() {
  var _base;
  
  this.extends = ngxBaseComponent;
  
  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,

    function ngxJumbotronComponent(elementRef, ngxRenderService) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];
  
  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-jumbotron',
  template: '<ng-content></ng-content>',
  styles: [':host(.ngx-jumbotron) { padding: 2rem 1rem; margin-bottom: 2rem; background-color: #eceeef; display: block; } @media (min-width: 544px) { :host(.ngx-jumbotron) { padding: 4rem 2rem; } } :host(.ngx-jumbotron) /deep/ hr { border-top-color: #d0d5d8; }'],
  providers: [ngxRenderService],
  properties: ['prefixClass:prefix-class']
})
.Class(new _ngxJumbotronComponent());