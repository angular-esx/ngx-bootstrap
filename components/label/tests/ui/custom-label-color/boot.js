var customLabelColor = require('./test-case.js');

(function (testCases) {
    document.addEventListener('DOMContentLoaded', function () {
      ng.platformBrowserDynamic.bootstrap.bootstrap(customLabelColor, []);
  });
})(window.testCases);