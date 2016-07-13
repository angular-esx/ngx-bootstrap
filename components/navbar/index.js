var ngxBootstrap = require('ngxBootstrap');
var ngxNavbarComponent = require('./navbar.component.js');
var ngxNavbarItemDirective =  require('./navbar-item.directive.js');
var ngxNavbarBrandDirective = require('./navbar-brand.directive.js');
var ngxNavbarDividerDirective = require('./navbar-divider.directive.js');

ngxBootstrap.navbar = {
  NAVBAR_COMPONENT: ngxNavbarComponent,
  NAVBAR_ITEM_DIRECTIVE: ngxNavbarItemDirective,
  NAVBAR_BRAND_DIRECTIVE: ngxNavbarBrandDirective,
  NAVBAR_DIVIDER_DIRECTIVE: ngxNavbarDividerDirective,
  DIRECTIVES: [
    ngxNavbarComponent,
    ngxNavbarItemDirective,
    ngxNavbarBrandDirective,
    ngxNavbarDividerDirective
  ]
};

module.exports = ngxBootstrap;