(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxPaginationComponent = ng.core.Component({
    selector: 'ngx-pagination',
    template: _getNgxPaginationTemplate(),
    directives: [
      ngxBootstrap.ngxCores.ngxLinkComponent
    ],
    providers: [ngxBootstrap.ngxCores.ngxRendererService],
    properties: ['totalPages: total-pages', 'pageSize: page-size', 'currentPage: current-page', 'showPrevious: show-previous', 'showNext: show-next'],
    events: ['onSetLinkPage', 'onChangePage']
  })
  .Class(new _ngxPagination());

  function _ngxPagination() {
    var _ATTRIBUTES = {
      SIZE: 'size'
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxPaginationService,

      function (elementRef, ngxRendererService, ngxPaginationService) {
        this.cssClass = 'pagination';

        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService.for(elementRef.nativeElement);
        this.ngxPaginationService = ngxPaginationService;

        this.onSetLinkPage = new ng.core.EventEmitter();
        this.onChangePage = new ng.core.EventEmitter(false);
      }
    ];

    this.ngAfterContentInit = function () {
      this.size = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.SIZE);

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

    this.ngAfterViewInit = function () {
      var _className = this.cssClass;
      if (this.size) {
        _className += ' ' + this.ngxPaginationService.getSizeClass(this.size);
      }

      this.ngxRendererService.addToElementAttribute('class', _className, true);
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

    function _pageBuilder () {
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

  }

  function _getNgxPaginationTemplate() {
    return [
      '<ngx-link href="#" *ngIf="showPrevious" (click)="prev($event)">&laquo;</ngx-link>',
      '<ngx-link *ngFor="#page of pageBuilder.pages" href="{{page.link}}" state="{{page.number === currentPage ? \'active\': \'\'}}" (click)="changePage($event, page)">{{page.number}}</ngx-link>',
      '<ngx-link href="#" *ngIf="showNext" (click)="next($event)">&raquo;</ngx-link>',
    ].join('');
  }

})(window.ngxBootstrap);