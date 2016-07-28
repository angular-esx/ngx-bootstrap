var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../../../../cores/index.js');
var rx = require('rxjs/rx.js');
var ngxTooltip = require('../../../../tooltip/index.js');

function _testCase() {
  this.constructor = [ngxTooltip.tooltipService, function (ngxTooltipService) {
    this.ngxTooltipService = ngxTooltipService;

    this.delay = 1 * 1000;
  }];

  this.alert = function () {
    alert('You have just clicked me!!!');
    
    this.ngxTooltipService.hide('myTooltipWithTemplate');
  };

  this.toggleTooltip = function () {
    var _self = this;
    
    if (this.toggled) {
      this.toggled = false;
      
      rx.Observable.zip
      (
        this.ngxTooltipService.getHide$('myTooltip'),
        this.ngxTooltipService.getEnable$('myTooltip', false),
        function (hideEvent, enableEvent) {
          return [hideEvent, enableEvent];
        }
      )
      .subscribe(function (event) {
        _self.ngxTooltipService.next(event);
      });
    }
    else {
      this.toggled = true;

      rx.Observable.zip
      (
        this.ngxTooltipService.getEnable$('myTooltip', true),
        this.ngxTooltipService.getShow$('myTooltip'),
        function (enableEvent, showEvent) {
          return [enableEvent, showEvent];
        }
      )
      .subscribe(function (event) {
        _self.ngxTooltipService.next(event);
      });
    }
  };
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/tooltip/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxTooltip.TOOLTIP_DIRECTIVES
  ],
  providers: [
    ngxCore.animationService,
    ngxTooltip.TOOLTIP_PROVIDERS,
  ]
})
.Class(new _testCase());