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
  template: require('./themes/' + __THEME__ + '/templates/jumbotron.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/jumbotron.scss')],
  providers: [ngxRenderService],
  properties: ['prefixClass:prefix-class']
})
.Class(new _ngxJumbotronComponent());