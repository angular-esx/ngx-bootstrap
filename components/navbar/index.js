var ngx = require('ngx');
var ngxNavbarComponent = require('./navbar.component.js');
var ngxNavbarItemDirective =  require('./navbar-item.directive.js');
var ngxNavbarBrandDirective = require('./navbar-brand.directive.js');
var ngxNavbarDividerDirective = require('./navbar-divider.directive.js');

ngx.navbar = {
  navbarComponent: ngxNavbarComponent,
  navbarItemDirective: ngxNavbarItemDirective,
  navbarBrandDirective: ngxNavbarBrandDirective,
  navbarDividerDirective: ngxNavbarDividerDirective,
  DIRECTIVES: [
    ngxNavbarComponent,
    ngxNavbarItemDirective,
    ngxNavbarBrandDirective,
    ngxNavbarDividerDirective
  ]
};

module.exports = ngx;