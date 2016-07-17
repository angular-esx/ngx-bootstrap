function _testCase() {
  this.constructor = [ngx.alert.alertService, function (ngxAlertService) {
    this.ngxAlertService = ngxAlertService;

    this.href = 'https://translate.google.com.vn';
  }];

  this.ngAfterViewInit = function () {
    var _self = this;
    setTimeout(function () {
      _self.ngxAlertService.show('myInfoAlert');
      _self.ngxAlertService.dismiss('mySuccessAlert');
    }, 2 * 1000);
  };

  this.showing = function (event) {
    console.log('showing', event);
  };

  this.shown = function (event) {
    console.log('shown', event);
  };

  this.dismissing = function (event) {
    console.log('dismissing', event);
  };

  this.dismissed = function (event) {
    console.log('dismissed', event);
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/alert/tests/ui/isolated-components/test-case.html',
  directives: [
    ngx.link.DIRECTIVES,
    ngx.alert.DIRECTIVES
  ],
  providers: [
    ngx.core.animationService,
    ngx.alert.PROVIDERS
  ]
})
.Class(new _testCase());