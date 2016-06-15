var ngxPagerService = require('./services/pager.service.js');
var ngxLinkComponent = require('./../../cores/components/link/link.component.js');
var ngxLinkService = require('./../../cores/components/link/services/link.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxPagerComponent() {
  var _base;
  var _ATTRIBUTES = {
    TOTAL_PAGES: 'total-pages',
    CURRENT_PAGE: 'current-page',
    SHOW_PREVIOUS: 'show-previous',
    SHOW_NEXT: 'show_next'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxPagerService,

    function ngxPagerComponent(elementRef, ngxRenderService, ngxPagerService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxPagerService = ngxPagerService;

        this.setPageEmitter = new ng.core.EventEmitter();
        this.changePageEmitter = new ng.core.EventEmitter(false);
      }
    }
  ];

  this.ngAfterContentInit = function () {
    if (!this.totalPages || this.totalPages < 0) { this.totalPages = 0; }
    else { this.totalPages = parseInt(this.totalPages); }

    if (!this.currentPage || this.currentPage < 1) { this.currentPage = 1; }
    else { this.currentPage = parseInt(this.currentPage); }

    if (this.showPrevious === undefined || this.showPrevious === null) { this.showPrevious = true; }
    if (this.showNext === undefined || this.showNext === null) { this.showNext = true; }

    this.pageBuilder = new _pageBuilder();
    this.pageBuilder.build(this.totalPages, this.currentPage, this.setPageEmitter);
  };

  this.prev = function ($event) {
    if (_changePage($event, this.pageBuilder.prevPage, this.changePageEmitter)) {
      this.currentPage = this.pageBuilder.prevPage.number;
      this.pageBuilder.build(this.totalPages, this.currentPage, this.setPageEmitter);
    }
  };

  this.next = function ($event) {
    if (_changePage($event, this.pageBuilder.nextPage, this.changePageEmitter)) {
      this.currentPage = this.pageBuilder.nextPage.number;
      this.pageBuilder.build(this.totalPages, this.currentPage, this.setPageEmitter);
    }
  };

  function _changePage($event, page, changePageEmitter) {
    if (!page || !page.number) {
      $event.preventDefault();
      return false;
    }

    var _isCanceled = false;
    changePageEmitter.emit({
      page: page,
      cancel: function () {
        _isCanceled = true;

        $event.preventDefault();
        $event.stopPropagation();
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
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-pager',
  template: '﻿<ngx-link *ngIf=\"showPrevious\" \r\n          class=\"ngx-pager-left-item\"\r\n          prefix-class=\"ngx-pager-item\"\r\n          href=\"pageBuilder.prevPage.link\" \r\n          (click)=\"prev($event)\">Prev</ngx-link>\r\n\r\n<ngx-link *ngIf=\"showNext\" \r\n          class=\"ngx-pager-right-item\"\r\n          prefix-class=\"ngx-pager-item\"\r\n          href=\"pageBuilder.nextPage.link\" \r\n          (click)=\"next($event)\">Next</ngx-link>',
  styles: [':host(.ngx-pager) { padding-left: 0; margin: 1rem 0 1rem 0; text-align: center; } :host(.ngx-pager)::after { content: ""; display: table; clear: both; } :host(.ngx-pager) > .ngx-pager-item { display: inline; } :host(.ngx-pager) > .ngx-pager-item > a { display: inline-block; text-decoration: none; padding: 5px 14px; color: #0270d2; background-color: white; border: 1px solid #dfdfdf; border-radius: 1rem; } :host(.ngx-pager) > .ngx-pager-item > a:focus, :host(.ngx-pager) > .ngx-pager-item > a:hover { background-color: rgba(191, 191, 191, 0.2); } :host(.ngx-pager).ngx-pager-type-aligned > .ngx-pager-left-item { float: left; } :host(.ngx-pager).ngx-pager-type-aligned > .ngx-pager-right-item { float: right; } '],
  directives: [ngxLinkComponent],
  providers: [ngxRenderService, ngxLinkService],
  properties: [
    'type',
    'totalPages: total-pages',
    'currentPage: current-page',
    'showPrevious: show-previous',
    'showNext: show-next',
    'prefixClass: prefix-class'
  ],
  events: ['setPageEmitter: setPage', 'changePageEmitter: changePage']
})
.Class(new _ngxPagerComponent());