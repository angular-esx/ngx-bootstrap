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
  styles: [':host(.ngx-jumbotron) hr { height: 0; border-width: 0 0 0 0; border-top-width: 1px; border-style: solid; box-sizing: content-box; } :host(.ngx-jumbotron) { display: block; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; padding: 2rem 1rem 2rem 1rem; margin: 0 0 2rem 0; background-color: #dfdfdf; } @media (min-width: 544px) { :host(.ngx-jumbotron) { padding: 4rem 2rem 4rem 2rem; } } :host(.ngx-jumbotron) hr { border-top-color: #bfbfbf; } '],
  providers: [ngxRenderService],
  properties: ['prefixClass:prefix-class']
})
.Class(new _ngxJumbotronComponent());