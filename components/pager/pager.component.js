var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxPagerComponent() {
  var _base;

  this.extends = ngxCore.baseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxPagerComponent(elementRef, renderer) {
      ngxCore.baseComponent.apply(this, arguments);

      if (elementRef) {
        this.setPageEmitter = new ngCore.EventEmitter();
        this.changePageEmitter = new ngCore.EventEmitter(false);
      }
    }
  ];

  this.initDefaultValues = function () {
    if (ngxUtil.isEmpty(this.totalPages) || this.totalPages < 0) { this.totalPages = 0; }
    else { this.totalPages = parseInt(this.totalPages); }

    if (ngxUtil.isEmpty(this.currentPage) || this.currentPage < 1) { this.currentPage = 1; }
    else { this.currentPage = parseInt(this.currentPage); }

    if (ngxUtil.isNull(this.showPrevious)) { this.showPrevious = true; }
    if (ngxUtil.isNull(this.showNext)) { this.showNext = true; }

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
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-pager',
  template: require('./themes/' + __THEME__ + '/templates/pager.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/pager.scss')],
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