(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxExampleAComponent = ng.core.Directive({
    selector: 'ngx-example-a',
  })
  .Class({
    constructor: [ngxBootstrap.ngxComponents.ngxExampleAService, function (ngxExampleAService) {

    }]
  });

})(window.ngxBootstrap);