module.exports = function (params) {
  return function () {
    var _gulp = params.gulp,
        _sass = params.plugins.sass,
        _rename = params.plugins.rename;

    return _gulp.src('./scss/ngx-bootstrap.scss')
      .pipe(_sass({outputStyle: 'expanded'}).on('error', _sass.logError))
      .pipe(_gulp.dest('./dist/css/'))
      .pipe(_sass({outputStyle: 'compressed'}).on('error', _sass.logError))
      .pipe(_rename('ngx-bootstrap.min.css'))
      .pipe(_gulp.dest('./dist/css/'));
  };
};