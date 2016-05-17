var isolatedDirecctives = require('./test-case.js');

document.addEventListener('DOMContentLoaded', function () {
  ng.platform.browser.bootstrap(isolatedDirecctives, []);
});