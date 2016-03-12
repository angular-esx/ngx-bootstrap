module.exports = function (params) {
  return function () {
    var browserSync = params.plugins.browserSync;

    browserSync({
      server: {
          baseDir: "./"
      },
      port: 8080,
      open: true,
      notify: false
    });
  };
};