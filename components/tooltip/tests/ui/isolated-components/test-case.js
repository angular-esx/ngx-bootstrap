function _testCase() {
  this.constructor = [ngxBootstrap.tooltip.TOOLTIP_SERVICE, function (ngxTooltipService) {
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
      
      Rx.Observable.zip
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

      Rx.Observable.zip
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

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/tooltip/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.tooltip.DIRECTIVES
  ],
  providers: [
    ngxBootstrap.coreService.ANIMATION_SERVICE,
    ngxBootstrap.tooltip.SERVICES,
  ]
})
.Class(new _testCase());