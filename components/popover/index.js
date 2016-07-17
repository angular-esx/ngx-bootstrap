var ngx = require('ngx');
var ngxPopoverComponent = require('./popover.component.js');
var ngxPopoverDirective = require('./popover.directive.js');
var ngxPopoverTemplateDirective = require('./popover-template.directive.js');
var ngxPopoverService = require('./services/popover.service.js');

ngx.popover = {
  popoverComponent: ngxPopoverComponent,
  popoverDirective: ngxPopoverDirective,
  popoverTemplateDirective: ngxPopoverTemplateDirective,
  popoverService: ngxPopoverService,
  DIRECTIVES: [
    ngxPopoverComponent,
    ngxPopoverDirective,
    ngxPopoverTemplateDirective
  ],
  PROVIDERS: [ ngxPopoverService ] 
};

module.exports = ngx;