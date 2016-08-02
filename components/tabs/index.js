import ngxTabsComponent from './tabs.component';
import ngxTabDirective from './tab.directive';
import ngxTabHeaderDirective from './tab-header.directive';
import ngxTabContentDirective from './tab-content.directive';
import ngxTabsService from './services/alert.service';

export * from './tabs.component';
export * from './tab.directive';
export * from './tab-header.directive';
export * from './tab-content.directive';
export * from './services/alert.service';

export var NGX_TABS_DIRECTIVES =  [
  ngxTabsComponent,
  ngxTabDirective,
  ngxTabHeaderDirective,
  ngxTabContentDirective
];

export var NGX_TABS_PROVIDERS = [ngxTabsService];