var ngxToggleItemService = require('./services/toggle-item.service.js');
var ngxBaseDirective = require('baseDirective');
var ngxRenderService = require('renderService');

function _ngxToggleItemDirective() {
  var _base;
  var _ATTRIBUTES = {
    ID: 'id',
  };

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxToggleItemService,

    function ngxToggleItemDirective(elementRef, ngxRenderService, ngxToggleItemService) {
      ngxBaseDirective.apply(this, arguments);
      
      if (elementRef) {
        this.ngxToggleItemService = ngxToggleItemService;

        this.toggleEmitter = new ng.core.EventEmitter(false);
      }
    }
  ];

  this.toggle = function () {
    if (this.ngxToggleItemService.isDisabledStateClass(this.getPrefixClass(), this.state)) { return; }

    var _isActive = this.ngxToggleItemService.isActiveStateClass(this.getPrefixClass(), this.state);
    var _isCanceled = false;

    this.toggleEmitter.next({
      target: { id: this.id, active: !_isActive },
      cancel: function () { _isCanceled = true; }
    });

    if (_isCanceled) { return; }

    var _changeRecord = {
      state: { previousValue: this.state || '' }
    };
    if (_isActive) {
      this.state = this.state.replace(this.ngxToggleItemService.getStates().ACTIVE, '').trim();
    }
    else {
      this.state = (this.ngxToggleItemService.getStates().ACTIVE + ' ' + _changeRecord.state.previousValue).trim();
    }
    _changeRecord.state.currentValue = this.state;

    this.ngOnChanges(_changeRecord);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: '[ngx-toggle-item]',
  providers: [ngxRenderService],
  host: {
    '(click)': 'toggle()'
  },
  properties: ['id', 'state', 'prefixClass:prefix-class'],
  events: ['toggleEmitter: toggle']
})
.Class(new _ngxToggleItemDirective());
