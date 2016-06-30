var NGX_ALERT = require('components/alert/index.js');
var NGX_LINK = require('components/link/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = [NGX_ALERT.SERVICE, function (ngxAlertService) {
    this.ngxAlertService = ngxAlertService;

    this.COLORS = ngxAlertService.getColors();
    this.TYPES = ngxAlertService.getTypes();
    this.POSITIONS = ngxAlertService.getPositions();
    this.STATES = ngxAlertService.getStates();

    this.href = 'https://translate.google.com.vn';
  }];

  this.ngAfterViewInit = function () {
    var _self = this;
    setTimeout(function () {
      _self.ngxAlertService.show(_self.infoAlertElement.nativeElement);
      _self.ngxAlertService.dismiss(_self.successAlertElement.nativeElement);
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

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/alert/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_ALERT.DIRECTIVES.ALERT,
    NGX_ALERT.DIRECTIVES.ALERT_LINK,
    NGX_LINK.DIRECTIVES
  ],
  providers: [
    NGX_CORE_SERVICES,
    NGX_ALERT.SERVICE,
    NGX_LINK.SERVICE
  ],
  queries: {
    infoAlertElement: new ng.core.ViewChild('myInfoAlert', { read: ng.core.ElementRef }),
    successAlertElement: new ng.core.ViewChild('mySuccessAlert', { read: ng.core.ElementRef })
  }
})
.Class(new _testCase());