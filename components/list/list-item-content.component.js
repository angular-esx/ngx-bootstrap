var ngxListItemService = require('components/list/services/list-item.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxRenderService = require('renderService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _ngxListItemContentComponent() {
  var _base;
  var _ATTRIBUTES = {
    POSITION: 'position'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxListItemService,

    function ngxListItemContentComponent(elementRef, ngxRenderService, ngxListItemService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxListItemService = ngxListItemService;
      }
    }
  ];

  this.onAggregatePropertyValueState = function (changeRecord) {
    var _aggregate = _getBaseInstance(this).onAggregatePropertyValueState.apply(this, arguments);

    if (this.ngxListItemService.getPositionClass) {
      _aggregate[_ATTRIBUTES.POSITION] = {
        prev: this.ngxListItemService.getPositionClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.POSITION)),
        current: this.ngxListItemService.getPositionClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.POSITION))
      };
    }

    return _aggregate;
  };

  this.getPrefixClass = function () {
    return this.prefixClass || 'ngx-list-item-content';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-list-item-content',
  template: require('./themes/' + __THEME__ + '/templates/list-item-content.html'),
  providers: [ngxRenderService],
  properties: ['type', 'position', 'prefixClass:prefix-class']
})
.Class(new _ngxListItemContentComponent());