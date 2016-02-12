module.exports = function (params) {
  return function () {
    var _gulp = params.gulp;
    
    _gulp.watch('./scss/**/*.scss', ['sass']);
  };
};