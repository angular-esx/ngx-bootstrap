var isolatedComponents = require('./test-case.js');

(function (testCases) {
    document.addEventListener('DOMContentLoaded', function () {
      ng.platform.browser.bootstrap(isolatedComponents, []);
  });
})(window.testCases);