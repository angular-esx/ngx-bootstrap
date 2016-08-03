import { ngxTooltipComponent } from './tooltip.component';
import { ngxTooltipDirective } from './tooltip.directive';
import { ngxTooltipTemplateDirective } from './tooltip-template.directive';
import { ngxTooltipService } from './services/tooltip.service';

export * from './tooltip.component';
export * from './tooltip.directive';
export * from './tooltip-template.directive';
export * from './services/tooltip.service';

export var NGX_TOOLTIP_DIRECTIVES = [
    ngxTooltipComponent,
    ngxTooltipDirective,
    ngxTooltipTemplateDirective
];

export var NGX_TOOLTIP_PROVIDERS = [ngxTooltipService];