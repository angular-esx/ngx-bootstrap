var ngxNavbarComponent = require('./navbar.component.js');
var ngxNavbarItemDirective =  require('./navbar-item.directive.js');
var ngxNavbarBrandDirective = require('./navbar-brand.directive.js');
var ngxNavbarDividerDirective = require('./navbar-divider.directive.js');

module.exports = {
  navbarComponent: ngxNavbarComponent,
  navbarItemDirective: ngxNavbarItemDirective,
  navbarBrandDirective: ngxNavbarBrandDirective,
  navbarDividerDirective: ngxNavbarDividerDirective,
  NAVBAR_DIRECTIVES: [
    ngxNavbarComponent,
    ngxNavbarItemDirective,
    ngxNavbarBrandDirective,
    ngxNavbarDividerDirective
  ]
};