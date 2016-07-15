(function (testCases) {
    document.addEventListener('DOMContentLoaded', function () {
      ng.platform.browser.bootstrap(testCases.isolatedLinkButtons, []);
  });
})(window.testCases);