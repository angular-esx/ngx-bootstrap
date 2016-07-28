var ngxPopoverComponent = require('./popover.component.js');
var ngxPopoverDirective = require('./popover.directive.js');
var ngxPopoverTemplateDirective = require('./popover-template.directive.js');
var ngxPopoverService = require('./services/popover.service.js');

module.exports = {
  popoverComponent: ngxPopoverComponent,
  popoverDirective: ngxPopoverDirective,
  popoverTemplateDirective: ngxPopoverTemplateDirective,
  popoverService: ngxPopoverService,
  POPOVER_DIRECTIVES: [
    ngxPopoverComponent,
    ngxPopoverDirective,
    ngxPopoverTemplateDirective
  ],
  POPOVER_PROVIDERS: [ngxPopoverService]
};