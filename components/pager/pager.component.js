(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxPagerComponent = ng.core.Component({
    selector: 'ngx-pager',
    template: _getNgxPagerTemplate(),
    directives: [
      ngxBootstrap.ngxCores.ngxLinkComponent
    ],
    providers: [ngxBootstrap.ngxCores.ngxRendererService],
    properties: ['totalPages: total-pages', 'currentPage: current-page', 'showPrevious: show-previous', 'showNext: show-next'],
    events: ['onSetLinkPage', 'onChangePage']
  })
  .Class(new _ngxPager());

  function _ngxPager() {
    var _ATTRIBUTES = {
      TYPE: 'type'
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxPagerService,

      function (elementRef, ngxRendererService, ngxPagerService) {
        this.cssClass = 'pager';

        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService.for(elementRef.nativeElement);
        this.ngxPagerService = ngxPagerService;

        this.onSetLinkPage = new ng.core.EventEmitter();
        this.onChangePage = new ng.core.EventEmitter(false);
      }
    ];

    this.ngAfterContentInit = function () {
      this.type = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.TYPE);
      this.isAlignedType = this.ngxPagerService.getTypeClass(this.type);

      if (!this.totalPages || this.totalPages < 0) { this.totalPages = 0; }
      else { this.totalPages = parseInt(this.totalPages); }

      if (!this.currentPage || this.currentPage < 1) { this.currentPage = 1; }
      else { this.currentPage = parseInt(this.currentPage); }

      if (this.showPrevious === undefined || this.showPrevious === null) { this.showPrevious = true; }
      if (this.showNext === undefined || this.showNext === null) { this.showNext = true; }

      this.pageBuilder = new _pageBuilder();
      this.pageBuilder.build(this.totalPages, this.currentPage, this.onSetLinkPage);
    };

    this.ngAfterViewInit = function () {
      this.ngxRendererService.addToElementAttribute('class', this.cssClass, true);
    };

    this.prev = function ($event) {
      if (_changePage($event, this.pageBuilder.prevPage, this.onChangePage)) {
        this.currentPage = this.pageBuilder.prevPage.number;
        this.pageBuilder.build(this.totalPages, this.currentPage, this.onSetLinkPage);
      }
    };

    this.next = function ($event) {
      if (_changePage($event, this.pageBuilder.nextPage, this.onChangePage)) {
        this.currentPage = this.pageBuilder.nextPage.number;
        this.pageBuilder.build(this.totalPages, this.currentPage, this.onSetLinkPage);
      }
    };

    function _changePage($event, page, onChangePage) {
      if (!page || !page.number) {
        $event.preventDefault();
        return false;
      }

      var _isCanceled = false;
      if (onChangePage) {
        onChangePage.emit({
          page: page,
          cancel: function () { _isCanceled = true; },
          preventDefault: function () { $event.preventDefault(); }
        });
      }

      return !_isCanceled;
    }

    function _pageBuilder () {
      this.prevPage = { number: null, link: '#' };
      this.nextPage = { number: null, link: '#' };

      this.build = function (totalPages, currentPage, onSetLinkPage) {
        this.prevPage.number = currentPage - 1 > 0 ? currentPage - 1: null;
        this.prevPage.link = '#';
        
        this.nextPage.number = currentPage + 1 <= totalPages ? currentPage + 1 : null;
        this.nextPage.link = '#';

        var _self = this;
        onSetLinkPage.emit({
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
  }

  function _getNgxPagerTemplate() {
    return [
      '<ngx-link href="pageBuilder.prevPage.link" [class.pager-prev]="isAlignedType" *ngIf="showPrevious" (click)="prev($event)">Prev</ngx-link>',
      '<ngx-link href="pageBuilder.nextPage.link" [class.pager-next]="isAlignedType" *ngIf="showNext" (click)="next($event)">Next</ngx-link>',
    ].join('');
  }

})(window.ngxBootstrap);