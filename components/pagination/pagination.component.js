var ngxPaginationService = require('./services/pagination.service.js');
var ngxLinkComponent = require('./../../cores/components/link/link.component.js');
var ngxLinkService = require('./../../cores/components/link/services/link.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxPaginationComponent() {
  var _base;
  var _ATTRIBUTES = {
    TOTAL_PAGES: 'total-pages',
    PAGE_SIZE: 'page-size',
    CURRENT_PAGE: 'current-page',
    SHOW_PREVIOUS: 'show-previous',
    SHOW_NEXT: 'show_next'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxPaginationService,

    function ngxPaginationComponent(elementRef, ngxRenderService, ngxPaginationService) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.ngxPaginationService = ngxPaginationService;

        this.setLinkPageEmitter = new ng.core.EventEmitter();
        this.changePageEmitter = new ng.core.EventEmitter(false);
      }
    }
  ];

  this.ngAfterContentInit = function () {
    if (!this.totalPages || this.totalPages < 0) { this.totalPages = 0; }
    else { this.totalPages = parseInt(this.totalPages); }

    if (!this.pageSize || this.pageSize < 1) { this.pageSize = 10; }
    else { this.pageSize = parseInt(this.pageSize); }

    if (!this.currentPage || this.currentPage < 1) { this.currentPage = 1; }
    else { this.currentPage = parseInt(this.currentPage); }

    if (this.showPrevious === undefined || this.showPrevious === null) { this.showPrevious = true; }
    if (this.showNext === undefined || this.showNext === null) { this.showNext = true; }

    this.startPage = _getStartPage(this.pageSize, this.currentPage);

    this.pageBuilder = new _pageBuilder();
    this.pageBuilder.build(this.totalPages, this.pageSize, this.startPage, this.onSetLinkPage);
  };

  this.prev = function ($event) {
    this.changePage($event, this.pageBuilder.getPage(this.currentPage - 1));
  };

  this.next = function ($event) {
    this.changePage($event, this.pageBuilder.getPage(this.currentPage + 1));
  };

  this.changePage = function ($event, page) {
    if (page < 1 || page > this.totalPages) { return; }

    var _isCanceled = false;
    if (this.onChangePage) {
      this.onChangePage.emit({
        page: page,
        cancel: function () { _isCanceled = true; },
        preventDefault: function () { $event.preventDefault(); }
      });
    }

    if (_isCanceled) { return; }

    this.currentPage = page.number;
    this.startPage = _getStartPage(this.pageSize, this.currentPage);
    this.pageBuilder.build(this.totalPages, this.pageSize, this.startPage, this.onSetLinkPage);
  };

  function _getStartPage(pageSize, currentPage) {
    var _startPage = currentPage - parseInt(pageSize / 2);
    return _startPage <= 0 ? 1 : _startPage;
  }

  function _pageBuilder() {
    var _indexedPages = {};
    var _sortedPages = [];
    this.pages = [];

    this.build = function (totalPages, pageSize, startPage, onSetLinkPage) {
      var _page;
      for (var i = startPage; i <= totalPages; i++) {
        if (i === startPage + pageSize) { break; }
        if (_indexedPages[i]) { continue; }

        _page = { number: i, link: '#' };
        if (onSetLinkPage) { onSetLinkPage.emit({ page: _page }); }

        _indexedPages[i] = _page;

        _sortedPages.push(_page);
      }

      _sortedPages.sort(function (item01, item02) {
        return item01.number === item02.number ? 0 : (item01.number > item02.number ? 1 : -1);
      });

      var _tempPages = [];
      ngxBootstrap.forEach(_sortedPages, function (page) {
        if (page.number === startPage + pageSize) { return true; }

        if (page.number >= startPage) {
          _tempPages.push(page);
        }
      });

      this.pages = _tempPages;
    };

    this.getPage = function (pageNumber) {
      return _indexedPages[pageNumber];
    };
  }

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-pagination',
  /*Inject template at here*/
  /*Inject style at here*/
  directives: [ngxLinkComponent],
  providers: [ngxRenderService, ngxLinkService],
  properties: [
    'size',
    'totalPages: total-pages',
    'pageSize: page-size',
    'currentPage: current-page',
    'showPrevious: show-previous',
    'showNext: show-next',
    'prefixClass: prefix-class'
  ],
  events: ['setLinkPageEmitter: setLinkPage', 'changePageEmitter: changePage']
})
.Class(new _ngxPaginationComponent());