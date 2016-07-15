var ngxBootstrap = require('ngxBootstrap');
var ngxPopoverComponent = require('./popover.component.js');
var ngxPopoverDirective = require('./popover.directive.js');
var ngxPopoverTemplateDirective = require('./popover-template.directive.js');
var ngxPopoverService = require('./services/popover.service.js');

ngxBootstrap.popover = {
  POPOVER_COMPONENT: ngxPopoverComponent,
  POPOVER_DIRECTIVE: ngxPopoverDirective,
  POPOVER_TEMPLATE_DIRECTIVE: ngxPopoverTemplateDirective,
  POPOVER_SERVICE: ngxPopoverService,
  DIRECTIVES: [
    ngxPopoverComponent,
    ngxPopoverDirective,
    ngxPopoverTemplateDirective
  ],
  SERVICES: [ ngxPopoverService ] 
};

module.exports = ngxBootstrap;