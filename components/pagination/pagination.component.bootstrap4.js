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
    SIZE: 'size',
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

  this.ngOnInit = function () {
    if (this.elementRef) {
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
    }
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
  template: '﻿<ngx-link href=\"#\" *ngIf=\"showPrevious\" prefix-class=\"ngx-page-item\" (click)=\"prev($event)\">&laquo;</ngx-link>\r\n\r\n<ngx-link *ngFor=\"#page of pageBuilder.pages\" \r\n          href=\"{{page.link}}\" \r\n          state=\"{{page.number === currentPage ? \'active\' : \'\'}}\" \r\n          prefix-class=\"ngx-page-item\"\r\n          (click)=\"changePage($event, page)\">{{page.number}}\r\n</ngx-link>\r\n\r\n<ngx-link href=\"#\" *ngIf=\"showNext\" prefix-class=\"ngx-page-item\" (click)=\"next($event)\">&raquo;</ngx-link>\r\n',
  styles: ['﻿:host(.ngx-pagination) { display: inline-block; padding-left: 0; margin-top: 1rem; margin-bottom: 1rem; border-radius: .25rem; } :host(.ngx-pagination) > .ngx-page-item { display: inline; } :host(.ngx-pagination) > .ngx-page-item:first-child > a { margin-left: 0; border-top-left-radius: .25rem; border-bottom-left-radius: .25rem; } :host(.ngx-pagination) > .ngx-page-item:last-child > a { border-top-right-radius: .25rem; border-bottom-right-radius: .25rem; } :host(.ngx-pagination) > .ngx-page-item.ngx-page-item-state-active > a, :host(.ngx-pagination) > .ngx-page-item.ngx-page-item-state-active > a:focus, :host(.ngx-pagination) > .ngx-page-item.ngx-page-item-state-active > a:hover { z-index: 2; color: #fff; cursor: default; background-color: #0275d8; border-color: #0275d8; } :host(.ngx-pagination) > .ngx-page-item.ngx-page-item-state-disabled > a, :host(.ngx-pagination) > .ngx-page-item.ngx-page-item-state-disabled > a:focus, :host(.ngx-pagination) > .ngx-page-item.ngx-page-item-state-disabled > a:hover { color: #818a91; cursor: not-allowed; background-color: #fff; border-color: #ddd; } :host(.ngx-pagination) > .ngx-page-item > a { position: relative; float: left; padding: .5rem .75rem; margin-left: -1px; line-height: 1.5; color: #0275d8; text-decoration: none; background-color: #fff; border: 1px solid #ddd; } :host(.ngx-pagination) > .ngx-page-item > a:focus, :host(.ngx-pagination) > .ngx-page-item > a:hover { color: #014c8c; background-color: #eceeef; border-color: #ddd; } :host(.ngx-pagination.ngx-pagination-size-large) > .ngx-page-item > a { padding: .75rem 1.5rem; font-size: 1.25rem; line-height: 1.333333; } :host(.ngx-pagination.ngx-pagination-size-large) > .ngx-page-item:first-child > a { border-top-left-radius: .3rem; border-bottom-left-radius: .3rem; } :host(.ngx-pagination.ngx-pagination-size-large) > .ngx-page-item:last-child > a { border-top-right-radius: .3rem; border-bottom-right-radius: .3rem; } :host(.ngx-pagination.ngx-pagination-size-small) > .ngx-page-item > a { padding: .275rem .75rem; font-size: .875rem; line-height: 1.5; } :host(.ngx-pagination.ngx-pagination-size-small) > .ngx-page-item:first-child > a { border-top-left-radius: .2rem; border-bottom-left-radius: .2rem; } :host(.ngx-pagination.ngx-pagination-size-small) > .ngx-page-item:last-child > a { border-top-right-radius: .2rem; border-bottom-right-radius: .2rem; }'],
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