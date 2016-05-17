var isolatedComponents = require('./test-case.js');

document.addEventListener('DOMContentLoaded', function () {
  ng.platformBrowserDynamic.bootstrap(isolatedComponents, []);
});