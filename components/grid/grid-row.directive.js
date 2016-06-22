var ngxGridService = require('./services/grid.service.js');
var ngxBaseDirective = require('baseDirective');
var ngxRenderService = require('renderService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _ngxGridRowDirective() {
  var _base;
  var _ATTRIBUTES = {
    JUSTIFY_CONTENT: { NAME: 'justifyContent', ALIAS: 'justify-content' },
    ALIGN_CONTENT: { NAME: 'alignContent', ALIAS: 'align-content' },
    ALIGN_ITENS: { NAME: 'alignItems', ALIAS: 'align-items' }
  };

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxGridService,

    function ngxGridRowDirective(elementRef, ngxRenderService, ngxGridService) {
      ngxBaseDirective.apply(this, arguments);

      if (elementRef) {
        this.ngxGridService = ngxGridService;
      }
    }
  ];

  this.onAggregatePropertyValueState = function (changeRecord) {
    var _aggregate = {};

    if (this.ngxGridService.getRowJustifyContentClass) {
      _aggregate[_ATTRIBUTES.JUSTIFY_CONTENT.ALIAS] = {
        prev: this.ngxGridService.getRowJustifyContentClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.JUSTIFY_CONTENT.NAME, _ATTRIBUTES.JUSTIFY_CONTENT.ALIAS)),
        current: this.ngxGridService.getRowJustifyContentClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.JUSTIFY_CONTENT.NAME, _ATTRIBUTES.JUSTIFY_CONTENT.ALIAS))
      };
    }

    if (this.ngxGridService.getRowAlignContentClass) {
      _aggregate[_ATTRIBUTES.ALIGN_CONTENT.ALIAS] = {
        prev: this.ngxGridService.getRowAlignContentClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.ALIGN_CONTENT.NAME, _ATTRIBUTES.ALIGN_CONTENT.ALIAS)),
        current: this.ngxGridService.getRowAlignContentClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.ALIGN_CONTENT.NAME, _ATTRIBUTES.ALIGN_CONTENT.ALIAS))
      };
    }

    if (this.ngxGridService.getRowAlignItemsClass) {
      _aggregate[_ATTRIBUTES.ALIGN_ITENS.ALIAS] = {
        prev: this.ngxGridService.getRowAlignItemsClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.ALIGN_ITENS.NAME, _ATTRIBUTES.ALIGN_ITENS.ALIAS)),
        current: this.ngxGridService.getRowAlignItemsClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.ALIGN_ITENS.NAME, _ATTRIBUTES.ALIGN_ITENS.ALIAS))
      };
    }

    return _aggregate;
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: 'ngx-grid-row',
  providers: [ngxRenderService],
  properties: ['justifyContent:justify-content', 'alignContent:align-content', 'alignItems:align-items']
})
.Class(new _ngxGridRowDirective());
