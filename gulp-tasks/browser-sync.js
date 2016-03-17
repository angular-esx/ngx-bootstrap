module.exports = function (params) {
  return function () {
    var _browserSync = params.plugins.browserSync;

    _browserSync({
      server: {
          baseDir: "./"
      },
      port: 8080,
      open: true,
      notify: false
    });
  };
};