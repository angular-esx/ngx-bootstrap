var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../../../../cores/index.js');
var ngxAlert = require('../../../../alert/index.js');
var ngxLink = require('../../../../link/index.js');

function _testCase() {
  this.constructor = [ngxAlert.alertService, function (ngxAlertService) {
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

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/alert/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxLink.LINK_DIRECTIVES,
    ngxAlert.ALERT_DIRECTIVES
  ],
  providers: [
    ngxCore.animationService,
    ngxAlert.ALERT_PROVIDERS
  ]
})
.Class(new _testCase());