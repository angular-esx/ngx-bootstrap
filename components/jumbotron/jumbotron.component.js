var ngxBaseComponent = require('baseComponent');

function _ngxJumbotronComponent() {
  var _base;
  
  this.extends = ngxBaseComponent;
  
  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxJumbotronComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];
  
  this.getPrefixClass = function () {
    return 'ngx-jumbotron';
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-jumbotron',
  template: require('./themes/' + __THEME__ + '/templates/jumbotron.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/jumbotron.scss')],
  properties: ['initCssClass:class']
})
.Class(new _ngxJumbotronComponent());