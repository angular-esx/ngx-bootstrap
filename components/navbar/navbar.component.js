var ngxNavbarService = require('components/navbar/services/navbar.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxRenderService = require('renderService');
var ngxBootstrap = require('utils');

function _ngxNavbarComponent() {
  var _base;
  var _ATTRIBUTES = {
    POSITION: 'position'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxNavbarService,

    function ngxNavbarComponent(elementRef, ngxRenderService, ngxNavbarService) {
      ngxBaseComponent.apply(this, arguments);
      if (elementRef) {
        this.ngxNavbarService = ngxNavbarService;
      }
    }
  ];

  this.onAggregatePropertyValueState = function (changeRecord) {
    var _aggregate = _getBaseInstance(this).onAggregatePropertyValueState.apply(this, arguments);

    if (this.ngxNavbarService.getPositionClass) {
      _aggregate[_ATTRIBUTES.POSITION] = {
        prev: this.ngxNavbarService.getPositionClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.POSITION)),
        current: this.ngxNavbarService.getPositionClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.POSITION))
      };
    }

    return _aggregate;
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-navbar',
  template: require('./themes/' + __THEME__ + '/templates/navbar.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/navbar.scss')],
  providers: [ngxRenderService],
  properties: ['color', 'position', 'prefixClass:prefix-class']
})
.Class(new _ngxNavbarComponent());