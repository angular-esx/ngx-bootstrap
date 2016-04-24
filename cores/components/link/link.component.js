// ngxBootstrap.ngxClass.ngxLinkClass = _ngxLink;

var ngxBootstrapUtils = require('./../../ngx-bootstrap-utils.js');
var ngxRenderService = require('./../../services/render/render.service.js');
var ngxLinkService = require('./services/link.service.js');

var ngxLinkComponent = ng.core.Component({
  selector: 'ngx-link',
  template: _getNgxLinkTemplate(),
  properties: ['itemLink: href', 'state'],
  providers: [ngxRenderService]
})
.Class(new _ngxLink());

function _ngxLink() {
  var _ATTRIBUTES = {
    HREF: 'href',
    STATE: 'state',
  };

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxLinkService,

    function (elementRef, ngxRenderService, ngxLinkService) {
      this.elementRef = elementRef;
      this.ngxRenderService = ngxRenderService.for(elementRef.nativeElement);
      this.ngxLinkService = ngxLinkService;
    }
  ];

  this.ngAfterContentInit = function () {
    if (!this.href) { this.href = '#'; }
  };

  this.ngAfterViewInit = function () {
    var _self = this;
    ngxBootstrapUtils.forEach(_ATTRIBUTES, function (attribute) {
      _self.ngxRenderService.removeElementAttribute(attribute);
    });
  };

  this.isDisabled = function () {
    return this.ngxLinkService.isDisabledState(this.state);
  };

  this.isActive = function () {
    return this.ngxLinkService.isActiveState(this.state);
  };

  this.click = function ($event) {
    if (this.isDisabled()) {
      $event.preventDefault();
    }
  };

}

function _getNgxLinkTemplate() {
  return [
    '<a [href]="itemLink" [class.active]="isActive()" [class.disabled]="isDisabled()" (click) ="click($event)">',
      '<ng-content></ng-content>',
    '</a>'
  ].join('');
}

module.exports = ngxLinkComponent;