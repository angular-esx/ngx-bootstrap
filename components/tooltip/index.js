var ngxTooltipComponent = require('./tooltip.component.js');
var ngxTooltipDirective = require('./tooltip.directive.js');
var ngxTooltipTemplateDirective = require('./tooltip-template.directive.js');
var ngxTooltipService = require('./services/tooltip.service.js');

module.exports = {
  tooltipComponent: ngxTooltipComponent,
  tooltipDirective: ngxTooltipDirective,
  tooltipTemplateDirective: ngxTooltipTemplateDirective,
  tooltipService: ngxTooltipService,
  TOOLTIP_DIRECTIVES: [
    ngxTooltipComponent,
    ngxTooltipDirective,
    ngxTooltipTemplateDirective
  ],
  TOOLTIP_PROVIDERS: [ngxTooltipService]
};