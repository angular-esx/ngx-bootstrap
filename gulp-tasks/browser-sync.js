var browserSync = require('browser-sync')

module.exports = function (params) {
  return function () {
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