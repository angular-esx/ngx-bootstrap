var ngxBootstrap = require('ngxBootstrap');
var ngxTooltipComponent = require('./tooltip.component.js');
var ngxTooltipDirective = require('./tooltip.directive.js');
var ngxTooltipTemplateDirective = require('./tooltip-template.directive.js');
var ngxTooltipService = require('./services/tooltip.service.js');

ngxBootstrap.tooltip = {
  TOOLTIP_COMPONENT: ngxTooltipComponent,
  TOOLTIP_DIRECTIVE: ngxTooltipDirective,
  TOOLTIP_TEMPLATE_DIRECTIVE: ngxTooltipTemplateDirective,
  TOOLTIP_SERVICE: ngxTooltipService,
  DIRECTIVES: [
    ngxTooltipComponent,
    ngxTooltipDirective,
    ngxTooltipTemplateDirective
  ],
  SERVICES: [ ngxTooltipService ] 
};

module.exports = ngxBootstrap;