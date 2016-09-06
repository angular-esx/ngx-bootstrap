webpackJsonp([17],{

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);

/* harmony export */ __webpack_require__.d(exports, "ngxPagerComponent", function() { return ngxPagerComponent; });


function _ngxPagerComponent() {
  var _base;

  this.extends = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"];

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],

    function ngxPagerComponent(elementRef, renderer) {
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"].apply(this, arguments);

      if (elementRef) {
        this.setPageEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changePageEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](false);
      }
    }
  ];

  this.initDefaultValues = function () {
    if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(this.totalPages) || this.totalPages < 0) { this.totalPages = 0; }
    else { this.totalPages = parseInt(this.totalPages); }

    if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(this.currentPage) || this.currentPage < 1) { this.currentPage = 1; }
    else { this.currentPage = parseInt(this.currentPage); }

    if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(this.showPrevious)) { this.showPrevious = true; }
    if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(this.showNext)) { this.showNext = true; }

    this.pageBuilder = new _pageBuilder();
    this.pageBuilder.build(this.totalPages, this.currentPage, this.setPageEmitter);
  };

  this.getPrefixClass = function () {
    return 'ngx-pager';
  };

  this.prev = function (event) {
    if (_changePage(event, this.pageBuilder.prevPage, this.changePageEmitter)) {
      this.currentPage = this.pageBuilder.prevPage.number;
      this.pageBuilder.build(this.totalPages, this.currentPage, this.setPageEmitter);
    }
  };

  this.next = function (event) {
    if (_changePage(event, this.pageBuilder.nextPage, this.changePageEmitter)) {
      this.currentPage = this.pageBuilder.nextPage.number;
      this.pageBuilder.build(this.totalPages, this.currentPage, this.setPageEmitter);
    }
  };

  function _changePage(event, page, changePageEmitter) {
    if (!page || !page.number) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return false;
    }

    var _isCanceled = false;
    changePageEmitter.emit({
      page: page,
      cancel: function () {
        _isCanceled = true;

        event.preventDefault();
        event.stopImmediatePropagation();
      }
    });

    return !_isCanceled;
  }

  function _pageBuilder() {
    this.prevPage = { number: null, link: '#' };
    this.nextPage = { number: null, link: '#' };

    this.build = function (totalPages, currentPage, setPageEmitter) {
      this.prevPage.number = currentPage - 1 > 0 ? currentPage - 1 : null;
      this.prevPage.link = '#';

      this.nextPage.number = currentPage + 1 <= totalPages ? currentPage + 1 : null;
      this.nextPage.link = '#';

      var _self = this;
      setPageEmitter.emit({
        currentPage: currentPage,
        setPrevLink: function (link) {
          if (link && _self.prevPage.number > 0) { _self.prevPage.link = link; }
        },
        setNextLink: function (link) {
          if (link && _self.nextPage.number <= totalPages) { _self.nextPage.link = link; }
        }
      });
    };
  }

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"]); }
    return _base;
  }
}

var ngxPagerComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
  selector: 'ngx-pager',
  template: __webpack_require__(714),
  styles: [__webpack_require__(530)],
  properties: [
    'type',
    'totalPages: total-pages',
    'currentPage: current-page',
    'showPrevious: show-previous',
    'showNext: show-next',
    'initCssClass:class'
  ],
  events: ['setPageEmitter: onSetPage', 'changePageEmitter: onChangePage']
})
.Class(new _ngxPagerComponent());

/***/ },

/***/ 530:
/***/ function(module, exports) {

module.exports = ":host(.ngx-pager) { padding-left: 0; margin: 1rem 0 1rem 0; text-align: center; } :host(.ngx-pager)::after { content: \"\"; display: table; clear: both; } :host(.ngx-pager) > .ngx-pager-item { display: inline-block; text-decoration: none; padding: 5px 14px; color: #0275d9; background-color: white; border: 1px solid #cccccc; border-radius: 1rem; } :host(.ngx-pager) > .ngx-pager-item:focus, :host(.ngx-pager) > .ngx-pager-item:hover { background-color: #eceeef; } :host(.ngx-pager).ngx-pager-type-aligned > .ngx-pager-left-item { float: left; } :host(.ngx-pager).ngx-pager-type-aligned > .ngx-pager-right-item { float: right; }"

/***/ },

/***/ 714:
/***/ function(module, exports) {

module.exports = "<a *ngIf=\"showPrevious\" \r\n    class=\"ngx-pager-item ngx-pager-left-item\"\r\n    [href]=\"pageBuilder.prevPage.link\" \r\n    (click)=\"prev($event)\">Prev</a>\r\n\r\n<a *ngIf=\"showNext\" \r\n    class=\"ngx-pager-item ngx-pager-right-item\"\r\n    [href]=\"pageBuilder.nextPage.link\" \r\n    (click)=\"next($event)\">Next</a>";

/***/ },

/***/ 958:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pager_component__ = __webpack_require__(223);

/* harmony export */ __webpack_require__.d(exports, "NGX_PAGER_DIRECTIVES", function() { return NGX_PAGER_DIRECTIVES; });/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__pager_component__) if(["NGX_PAGER_DIRECTIVES","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_0__pager_component__[key]; }) }(__WEBPACK_IMPORT_KEY__));




var NGX_PAGER_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__pager_component__["ngxPagerComponent"]];

/***/ }

},[958]);