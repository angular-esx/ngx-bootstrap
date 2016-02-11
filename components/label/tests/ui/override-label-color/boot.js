(function (testCases) {
    document.addEventListener('DOMContentLoaded', function () {
      ng.platform.browser.bootstrap(testCases.overrideLabelColor, []);
  });
})(window.testCases);