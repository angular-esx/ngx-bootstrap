var ngxAlertComponent = require('components/alert/index.js');
var ngxCoreComponent = require('coreComponent');
var ngxCoreService = require('coreService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _testCase() {
  this.constructor = [ngxAlertComponent.SERVICE, function (ngxAlertService) {
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
    ngxCoreComponent.LINK.DIRECTIVE,
    ngxCoreComponent.ITEM.DIRECTIVE,
    ngxAlertComponent.DIRECTIVES.ALERT,
    ngxAlertComponent.DIRECTIVES.ALERT_LINK
  ],
  providers: [
    ngxCoreService,
    ngxAlertComponent.SERVICE,
    ngxCoreComponent.LINK.SERVICE,
    ngxCoreComponent.ITEM.SERVICE,
  ],
  queries: {
    infoAlertElement: new ng.core.ViewChild('myInfoAlert', { read: ng.core.ElementRef }),
    successAlertElement: new ng.core.ViewChild('mySuccessAlert', { read: ng.core.ElementRef })
  }
})
.Class(new _testCase());