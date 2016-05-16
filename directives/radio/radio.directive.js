var ngxRadioService = require('./services/radio.service.js');
var ngxRadioGroupDirective = require('./radio-group.directive.js');
var ngxBaseDirective = require('./../../cores/directives/base/base.directive.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxRadioDirective() {
  var _base;
  var _ATTRIBUTES = {
    STATE: 'state'
  };

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxRadioService,
    [new ng.core.Optional(), ngxRadioGroupDirective],

    function ngxRadioDirective(elementRef, ngxRenderService, ngxRadioService, ngxRadioGroup) {
      if (!ngxRadioGroup) { throw 'ngxRadioGroup is required'; }

      if (elementRef) {
        ngxBaseDirective.apply(this, arguments);

        this.ngxRadioService = ngxRadioService;
        this.ngxRadioGroup = ngxRadioGroup;

        var _self = this;
        
        this.ngxRadioGroup.ngxRadioGroupService.subscribe(
          function (event) {
            if (!event || !event.id || _self.id === event.id) {
              var _actions = _self.ngxRadioGroup.ngxRadioGroupService.getActions();

              if (event.type === _actions.CHANGE_VALUE) {
                _self.updateState();
              }
            }
          },
          function (error) {
            console.error('ngxRadioDirective', error);
          });
      }
    }
  ];

  this.isChecked = function () {
    return this.ngxRadioGroup.model === this.value;
  };

  this.check = function () {
    if (this.ngxRadioService.isDisabledStateClass(this.getPrefixClass(), this.state) || this.isChecked()) { return; }

    this.ngxRadioGroup.change(this.value);
  };

  this.updateState = function () {
    var _changeRecord = {
      state: { previousValue: this.state || '' }
    };

    if (this.isChecked()) {
      this.state = (this.ngxRadioService.getStates().ACTIVE + ' ' + _changeRecord.state.previousValue).trim();
    }
    else {
      this.state = _changeRecord.state.previousValue.replace(this.ngxRadioService.getStates().ACTIVE, '').trim();
    }
    _changeRecord.state.currentValue = this.state;
    
    this.ngOnChanges(_changeRecord);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-radio]',
  properties: ['value', 'prefixClass:prefix-class'],
  host: {
    '(click)': 'check()'
  }
})
.Class(new _ngxRadioDirective());