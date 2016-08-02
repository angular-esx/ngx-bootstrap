import ngxCollapseComponent from './collapse.component';
import ngxToggleCollapseDirective from './toggle-collapse.directive';
import ngxCollapseService from './services/collapse.service';

export * from './collapse.component';
export * from './toggle-collapse.directive';
export * from './services/collapse.service';

export var NGX_COLLAPSE_DIRECTIVES = [ngxCollapseComponent, ngxToggleCollapseDirective];
export var NGX_COLLAPSE_PROVIDERS = [ngxCollapseService];