var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../../../../cores/index.js');
var ngxButton = require('../../../../button/index.js');
var ngxBackdrop = require('../../../../backdrop/index.js');

function _testCase() {
  this.constructor = [
    ngCore.ViewContainerRef,
    ngxBackdrop.backdropService,

    function (viewContainerRef, ngxBackdropService) {
      this.ngxBackdropService = ngxBackdropService;
      ngxBackdropService.setRootViewContainerRef(viewContainerRef);
    }
  ];

  this.ngOnInit = function () {
    var _self = this;

    this.subscription = this.ngxBackdropService.onClick(function (event) {
      if (event.isActive) {
        _self.ngxBackdropService.hide();
      }
    });
  };

  this.ngOnDestroy = function () {
    if (this.subscription) { this.subscription.unsubscribe(); }
  };

  this.onClick = function () {
    this.ngxBackdropService.show();
  };
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/backdrop/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxButton.BUTTON_DIRECTIVES,
    ngxBackdrop.BACKDROP_DIRECTIVES
  ],
  providers: [
    ngxCore.animationService,
    ngxBackdrop.BACKDROP_PROVIDERS
  ]
})
.Class(new _testCase());