import * as ngCore from '@angular/core';
import { ngxBaseComponent, ngxUtils } from  '../cores';

function _ngxPaginationComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxPaginationComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.setPageEmitter = new ngCore.EventEmitter();
        this.changePageEmitter = new ngCore.EventEmitter(false);
      }
    }
  ];

  this.initDefaultValues = function () {
    if (ngxUtils.isEmpty(this.totalPages) || this.totalPages < 0) { this.totalPages = 0; }
    else { this.totalPages = parseInt(this.totalPages); }

    if (ngxUtils.isEmpty(this.pageSize) || this.pageSize < 1) { this.pageSize = 10; }
    else { this.pageSize = parseInt(this.pageSize); }

    if (ngxUtils.isEmpty(this.currentPage) || this.currentPage < 1) { this.currentPage = 1; }
    else { this.currentPage = parseInt(this.currentPage); }

    if (ngxUtils.isNull(this.showPrevious)) { this.showPrevious = true; }
    if (ngxUtils.isNull(this.showNext)) { this.showNext = true; }

    this.startPage = _getStartPage(this.pageSize, this.currentPage);

    this.pageBuilder = new _pageBuilder();
    this.pageBuilder.build(this.totalPages, this.pageSize, this.startPage, this.setPageEmitter);
  };

  this.getPrefixClass = function () {
    return 'ngx-pagination';
  };

  this.prev = function (event) {
    this.changePage(event, this.pageBuilder.getPage(this.currentPage - 1));
  };

  this.next = function (event) {
    this.changePage(event, this.pageBuilder.getPage(this.currentPage + 1));
  };

  this.changePage = function (event, page) {
    if (page < 1 || page > this.totalPages) { return; }

    var _isCanceled = false;
    this.changePageEmitter.emit({
      page: page,
      cancel: function () {
        _isCanceled = true;

        event.preventDefault();
        event.stopImmediatePropagation();
      }
    });

    if (_isCanceled) { return; }

    this.currentPage = page.number;
    this.startPage = _getStartPage(this.pageSize, this.currentPage);
    this.pageBuilder.build(this.totalPages, this.pageSize, this.startPage, this.setPageEmitter);
  };

  function _getStartPage(pageSize, currentPage) {
    var _startPage = currentPage - parseInt(pageSize / 2);
    return _startPage <= 0 ? 1 : _startPage;
  }

  function _pageBuilder() {
    var _indexedPages = {};
    var _sortedPages = [];
    this.pages = [];

    this.build = function (totalPages, pageSize, startPage, setPageEmitter) {
      var _page;
      for (var i = startPage; i <= totalPages; i++) {
        if (i === startPage + pageSize) { break; }
        if (_indexedPages[i]) { continue; }

        _page = { number: i, link: '#' };
        setPageEmitter.emit({ page: _page });

        _indexedPages[i] = _page;

        _sortedPages.push(_page);
      }

      _sortedPages.sort(function (item01, item02) {
        return item01.number === item02.number ? 0 : (item01.number > item02.number ? 1 : -1);
      });

      var _tempPages = [];
      ngxUtils.forEach(_sortedPages, function (page) {
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

export var ngxPaginationComponent = ngCore.Component({
  selector: 'ngx-pagination',
  templateUrl: './templates/pagination.html',
  styleUrls: ['./scss/pagination.scss'],
  properties: [
    'size',
    'totalPages: total-pages',
    'pageSize: page-size',
    'currentPage: current-page',
    'showPrevious: show-previous',
    'showNext: show-next',
    'initCssClass:class'
  ],
  events: ['setPageEmitter: onSetPage', 'changePageEmitter: onChangePage']
})
.Class(new _ngxPaginationComponent());