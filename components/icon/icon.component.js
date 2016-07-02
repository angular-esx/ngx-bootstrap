var ngxIconService = require('./services/icon.service.js');
var ngxRenderService = require('renderService');
var ngxBaseComponent = require('baseComponent');
var ngxBootstrap = require('utils');

function _ngxIconComponent() {
  var _base;
  var _ATTRIBUTES = {
    FONT_SET: { NAME: 'fontSet', ALIAS: 'font-set' },
    FONT_ICON: { NAME: 'fontIcon', ALIAS: 'font-icon' },
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxIconService,

    function ngxIconComponent(elementRef, ngxRenderService, ngxIconService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxIconService = ngxIconService;
      }
    }
  ];

  this.ngAfterContentInit = function () {
    if (!this.fontSet) {
      var _changeRecord = {};
      _changeRecord[_ATTRIBUTES.FONT_SET.ALIAS] = {
        previousValue: '',
        currentValue: this.ngxIconService.getIconFontClass(this.ngxIconService.getDefaultFontSet())
      };
      
      this.ngOnChanges(_changeRecord);
    }

    _getBaseInstance(this).ngAfterContentInit.apply(this);
  };

  this.onAggregatePropertyValueState = function (changeRecord) {
    var _aggregate = _getBaseInstance(this).onAggregatePropertyValueState.apply(this, arguments);

    if (this.ngxIconService.getIconFontClass) {
      _aggregate[_ATTRIBUTES.FONT_SET.ALIAS] = {
        prev: this.ngxIconService.getIconFontClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.FONT_SET.NAME, _ATTRIBUTES.FONT_SET.ALIAS)),
        current: this.ngxIconService.getIconFontClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.FONT_SET.NAME, _ATTRIBUTES.FONT_SET.ALIAS))
      };
    }

    _aggregate[_ATTRIBUTES.FONT_ICON.ALIAS] = {
      prev: this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.FONT_ICON.NAME, _ATTRIBUTES.FONT_ICON.ALIAS),
      current: this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.FONT_ICON.NAME, _ATTRIBUTES.FONT_ICON.ALIAS)
    };

    return _aggregate;
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-icon',
  template: require('./themes/' + __THEME__ + '/templates/icon.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/icon.scss')],
  providers: [ngxRenderService],
  properties: [
    'alt',
    'fontSet:font-set',
    'fontIcon:font-icon',
    'prefixClass:prefix-class'
  ]
})
.Class(new _ngxIconComponent());