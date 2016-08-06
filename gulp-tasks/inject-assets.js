var gulp = require('gulp');
var inject = require('gulp-inject');
var rename = require('gulp-rename');

module.exports = function (params) {
  return function () {
    var _streamSeries = params.plugins.streamSeries,
        _fileService = params.fileService,
        _libs = _fileService.LIBRARIES,
        _notReadOption = { read: false },
        _ngxFiles = [];
    
    var _es6ShamJs = gulp.src(_libs.ES6_SHAM_JS, _notReadOption),
        _es6ShimJs = gulp.src(_libs.ES6_SHIM_JS, _notReadOption),

        _ngxVendorsJs = gulp.src(_fileService.FILES.NGX_VENDORS_JS, _notReadOption),
        _ngxBootstrapJs = gulp.src(_fileService.FILES.NGX_BOOTSTRAP_JS, _notReadOption),
        _ngxTestJs = gulp.src(_fileService.FILES.NGX_TEST_JS, _notReadOption),

        _ngxNormalizeCss = gulp.src(_fileService.FILES.NGX_NORMALIZE_CSS, _notReadOption),
        _ngxBootstrapCss = gulp.src(_fileService.FILES.NGX_BOOTSTRAP_CSS, _notReadOption);

    _ngxFiles.push(_ngxBootstrapJs, _ngxTestJs, _ngxNormalizeCss, _ngxBootstrapCss);

    return gulp.src(_fileService.FILES.INDEX_TEMPLATE_HTML)
      .pipe(inject(_streamSeries(_es6ShamJs, _es6ShimJs), { relative: true, name: 'es11' }))    
      .pipe(inject(_streamSeries(_ngxVendorsJs), { relative: true, name: 'vendors' }))
      .pipe(inject(_streamSeries(_ngxFiles), { relative: true, name: 'ngx' }))
      .pipe(rename(_fileService.FILES.INDEX_HTML.replace(_fileService.PATHS.ROOT, '')))
      .pipe(gulp.dest(_fileService.PATHS.ROOT));
  };
};