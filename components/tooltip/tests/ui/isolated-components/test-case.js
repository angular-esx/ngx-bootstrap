﻿function _testCase() {
  this.constructor = [ngxBootstrap.tooltip.SERVICE, function (ngxTooltipService) {
    this.ngxTooltipService = ngxTooltipService;

    this.STATES = ngxTooltipService.getStates();
    this.POSITIONS = ngxTooltipService.getPositions();

    this.delay = 1 * 1000;
  }];

  this.alert = function () {
    alert('You have just clicked me!!!');
    
    this.ngxTooltipService.hide(this.tooltipWithTemplateElement.nativeElement);
  };

  this.toggleTooltip = function () {
    var _self = this;
    
    if (this.toggled) {
      this.toggled = false;
      
      Rx.Observable.zip
      (
        this.ngxTooltipService.getHide$(_self.tooltipElement.nativeElement),
        this.ngxTooltipService.getEnable$(_self.tooltipElement.nativeElement, false),
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

      Rx.Observable.zip
      (
        this.ngxTooltipService.getEnable$(_self.tooltipElement.nativeElement, true),
        this.ngxTooltipService.getShow$(_self.tooltipElement.nativeElement),
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

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/tooltip/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.tooltip.DIRECTIVES
  ],
  providers: [
    ngxBootstrap.tooltip.SERVICE,
    ngxBootstrap.coreService
  ],
  queries: {
    tooltipElement: new ng.core.ViewChild('myTooltip', { read: ng.core.ElementRef }),
    tooltipWithTemplateElement: new ng.core.ViewChild('myTooltipWithTemplate', { read: ng.core.ElementRef })
  }
})
.Class(new _testCase());