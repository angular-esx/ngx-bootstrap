import ngxPopoverComponent from './popover.component';
import ngxPopoverDirective from './popover.directive';
import ngxPopoverTemplateDirective from './popover-template.directive';
import ngxPopoverService from './services/popover.service';

export * from './popover.component';
export * from './popover.directive';
export * from './popover-template.directive';
export * from './services/popover.service';

export var NGX_POPOVER_DIRECTIVES = [
  ngxPopoverComponent,
  ngxPopoverDirective,
  ngxPopoverTemplateDirective
];
export var NGX_POPOVER_PROVIDERS = [ngxPopoverService];