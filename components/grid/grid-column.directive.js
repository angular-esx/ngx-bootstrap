var ngxGridService = require('./services/grid.service.js');
var ngxBaseDirective = require('baseDirective');
var ngxRenderService = require('renderService');
var ngxBootstrap = require('utils');

function _ngxGridColumnDirective() {
  var _base;
  var _ATTRIBUTES = {
    SIZE: 'size',
    OFFSET: 'offset',
    ORDER: 'order',
    ALIGN_SELF: { NAME: 'alignSelf', ALIAS: 'align-self' }
  };

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxGridService,

    function ngxGridColumnDirective(elementRef, ngxRenderService, ngxGridService) {
      ngxBaseDirective.apply(this, arguments);

      if (elementRef) {
        this.ngxGridService = ngxGridService;
      }
    }
  ];

  this.onAggregatePropertyValueState = function (changeRecord) {
    var _aggregate = {};

    if (this.ngxGridService.getColumnSizeClass) {
      _aggregate[_ATTRIBUTES.SIZE] = {
        prev: this.ngxGridService.getColumnSizeClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.SIZE)),
        current: this.ngxGridService.getColumnSizeClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.SIZE))
      };
    }

    if (this.ngxGridService.getColumnOffsetClass) {
      _aggregate[_ATTRIBUTES.OFFSET] = {
        prev: this.ngxGridService.getColumnOffsetClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.OFFSET)),
        current: this.ngxGridService.getColumnOffsetClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.OFFSET))
      };
    }

    if (this.ngxGridService.getColumnOrderClass) {
      _aggregate[_ATTRIBUTES.ORDER] = {
        prev: this.ngxGridService.getColumnOrderClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.ORDER)),
        current: this.ngxGridService.getColumnOrderClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.ORDER))
      };
    }

    if (this.ngxGridService.getColumnAlignSelfClass) {
      _aggregate[_ATTRIBUTES.ALIGN_SELF.ALIAS] = {
        prev: this.ngxGridService.getColumnAlignSelfClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.ALIGN_SELF.NAME, _ATTRIBUTES.ALIGN_SELF.ALIAS)),
        current: this.ngxGridService.getColumnAlignSelfClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.ALIGN_SELF.NAME, _ATTRIBUTES.ALIGN_SELF.ALIAS))
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
  selector: 'ngx-grid-col',
  providers: [ngxRenderService],
  properties: ['size', 'offset', 'order', 'alignSelf:align-self']
})
.Class(new _ngxGridColumnDirective());
