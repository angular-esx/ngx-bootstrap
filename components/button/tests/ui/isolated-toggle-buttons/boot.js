(function (testCases) {
    document.addEventListener('DOMContentLoaded', function () {
      ng.platform.browser.bootstrap(testCases.isolatedToggleButtons, []);
  });
})(window.testCases);