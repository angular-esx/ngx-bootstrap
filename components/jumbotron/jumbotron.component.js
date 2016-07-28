var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');

function _ngxJumbotronComponent() {
  var _base;
  
  this.extends = ngxCore.baseComponent;
  
  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxJumbotronComponent(elementRef, renderer) {
      ngxCore.baseComponent.apply(this, arguments);
    }
  ];
  
  this.getPrefixClass = function () {
    return 'ngx-jumbotron';
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-jumbotron',
  template: require('./themes/' + __THEME__ + '/templates/jumbotron.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/jumbotron.scss')],
  properties: ['initCssClass:class']
})
.Class(new _ngxJumbotronComponent());