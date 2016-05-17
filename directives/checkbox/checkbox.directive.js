var ngxCheckboxService = require('./services/checkbox.service.js');
var ngxCheckboxGroupDirective = require('./checkbox-group.directive.js');
var ngxBaseDirective = require('./../../cores/directives/base/base.directive.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxCheckboxDirective() {
  var _base;
  var _ATTRIBUTES = {
    STATE: 'state'
  };

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxCheckboxService,
    [new ng.core.Optional(), ngxCheckboxGroupDirective],

    function ngxCheckboxDirective(elementRef, ngxRenderService, ngxCheckboxService, ngxCheckboxGroup) {
      if (elementRef) {
        ngxBaseDirective.apply(this, arguments);

        this.ngxCheckboxService = ngxCheckboxService;
        this.ngxCheckboxGroup = ngxCheckboxGroup;

        this.modelChange = new ng.core.EventEmitter();
      }
    }
  ];

  this.isChecked = function () {
    if (this.ngxCheckboxGroup) {
      return this.ngxCheckboxGroup.hasValue(this.checkedValue);
    }
    else {
      return ngxBootstrap.isArray(this.model) ? this.model.indexOf(this.checkedValue) !== -1 : this.model === this.checkedValue;
    }
  };

  this.check = function () {
    if (this.ngxCheckboxService.isDisabledStateClass(this.getPrefixClass(), this.state)) { return; }

    if (this.ngxCheckboxGroup) {
      this.ngxCheckboxGroup.addOrRemoveValue(this.checkedValue);
    }
    else {
      this.addOrRemoveValue();
    }

    this.updateState();
  };

  this.addOrRemoveValue = function () {
    if (this.isChecked()) {
      if (ngxBootstrap.isArray(this.model)) {
        this.model.splice(this.model.indexOf(this.checkedValue), 1);
      }
      else {
        this.model = this.unCheckedValue;
      }
    }
    else {
      if (ngxBootstrap.isArray(this.model)) {
        this.model.push(this.checkedValue);
      }
      else {
        this.model = this.checkedValue;
      }
    }

    this.modelChange.emit(this.model);
  };

  this.updateState = function () {
    var _isActive = this.ngxCheckboxService.isActiveStateClass(this.getPrefixClass(), this.state);
    var _changeRecord = {
      state: { previousValue: this.state || '' }
    };
    if (_isActive) {
      this.state = this.state.replace(this.ngxCheckboxService.getStates().ACTIVE, '').trim();
    }
    else {
      this.state = (this.ngxCheckboxService.getStates().ACTIVE + ' ' + _changeRecord.state.previousValue).trim();
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
  selector: '[ngx-checkbox]',
  providers: [ngxRenderService],
  properties: ['state', 'model', 'checkedValue: checked-value', 'unCheckedValue: unchecked-value', 'prefixClass:prefix-class'],
  events: ['modelChange'],
  host: {
    '(click)': 'check()'
  }
})
.Class(new _ngxCheckboxDirective());