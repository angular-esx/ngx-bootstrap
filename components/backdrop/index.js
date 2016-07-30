var ngxBackdropComponent = require('./backdrop.component.js');
var ngxBackdropObserver = require('./services/backdrop-observer.service.js');
var ngxBackdropService = require('./services/backdrop.service.js');

module.exports = {
  backdropComponent: ngxBackdropComponent,
  backdropObserver: ngxBackdropObserver,
  backdropService: ngxBackdropService,
  BACKDROP_DIRECTIVES: [ngxBackdropComponent],
  BACKDROP_PROVIDERS: [ngxBackdropObserver, ngxBackdropService]
};