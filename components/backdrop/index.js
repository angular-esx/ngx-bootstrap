var ngx = require('ngx');
var ngxBackdropComponent = require('./backdrop.component.js');
var ngxBackdropObserver = require('./services/backdrop-observer.service.js');
var ngxBackdropService = require('./services/backdrop.service.js');

ngx.backdrop = {
  backdropComponent: ngxBackdropComponent,
  backdropObserver: ngxBackdropObserver,
  backdropService: ngxBackdropService,
  DIRECTIVES: [ngxBackdropComponent],
  PROVIDERS: [ngxBackdropObserver, ngxBackdropService]
};

module.exports = ngx;