import * as ngCore from '@angular/core';
import { ngxBaseComponent } from  '../../cores';

function _ngxJumbotronComponent() {
  var _base;
  
  this.extends = ngxBaseComponent;
  
  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

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

export var ngxJumbotronComponent = ngCore.Component({
  selector: 'ngx-jumbotron',
  templateUrl: './templates/jumbotron.html',
  styleUrls: ['./scss/jumbotron.scss'],
  properties: ['initCssClass:class']
})
.Class(new _ngxJumbotronComponent());