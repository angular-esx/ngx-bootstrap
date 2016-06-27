var ngxPagerService = require('./services/pager.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxRenderService = require('renderService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

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
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-pager',
  template: require('./themes/' + __THEME__ + '/templates/pager.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/pager.scss')],
  providers: [ngxRenderService],
  properties: [
    'type',
    'totalPages: total-pages',
    'currentPage: current-page',
    'showPrevious: show-previous',
    'showNext: show-next',
    'prefixClass: prefix-class'
  ],
  events: ['setPageEmitter: onSetPage', 'changePageEmitter: onChangePage']
})
.Class(new _ngxPagerComponent());