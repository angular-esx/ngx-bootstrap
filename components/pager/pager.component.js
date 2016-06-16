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
  /*Inject template at here*/
  /*Inject style at here*/
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