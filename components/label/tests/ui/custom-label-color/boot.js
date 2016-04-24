var customLabelColor = require('./test-case.js');

(function (testCases) {
    document.addEventListener('DOMContentLoaded', function () {
      ng.platform.browser.bootstrap(customLabelColor, []);
  });
})(window.testCases);