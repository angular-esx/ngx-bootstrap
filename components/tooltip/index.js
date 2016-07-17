var ngx = require('ngx');
var ngxTooltipComponent = require('./tooltip.component.js');
var ngxTooltipDirective = require('./tooltip.directive.js');
var ngxTooltipTemplateDirective = require('./tooltip-template.directive.js');
var ngxTooltipService = require('./services/tooltip.service.js');

ngx.tooltip = {
  tooltipComponent: ngxTooltipComponent,
  tooltipDirective: ngxTooltipDirective,
  tooltipTemplateDirective: ngxTooltipTemplateDirective,
  tooltipService: ngxTooltipService,
  DIRECTIVES: [
    ngxTooltipComponent,
    ngxTooltipDirective,
    ngxTooltipTemplateDirective
  ],
  PROVIDERS: [ ngxTooltipService ] 
};

module.exports = ngx;