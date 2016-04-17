(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxTabComponent = ng.core
    .Component({
      selector: 'ngx-tab',
      template: _getNgxTabTemplate(),
      inputs: ['active'],
      providers: [ngxBootstrap.ngxCores.ngxRendererService]
    })
    .Class(new _ngxTab());

  function _ngxTab() {
    var _ATTRIBUTES = {
      EVENT: 'event'
    };

    this.constructor = [
      [new ng.core.Query(ngxBootstrap.ngxComponents.ngxTabViewComponent), function() {}],
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      function (panes, elementRef, ngxRendererService) {
        this.elementRef = elementRef;

        this.ngxRendererService = ngxRendererService;

        panes.changes.subscribe(function () {
          var indexs, max;

          indexs = panes.toArray().map(function(p){
            return !isNaN(p.index) ? parseInt(p.index) : '';
          });

          max = Math.max.apply(null, indexs);

          panes.toArray().map(function(p){
            if(isNaN(p.index)){
              p.index = ++max;
            }
          });
        });

        this.panes = panes;

        Object.defineProperty(this.__proto__, "active", {
          set: function(active) {
            active = parseInt(active);

            this.panes.toArray().map(function(p){
              p.active = p.index == active;
            });
          },
          get: function () {
            return this._active;
          },
        });
      }
    ];

    this.select = function(pane) {
      this.panes.toArray().map(function(p){
        p.active = p == pane;
      });
    };
  }

  function _getNgxTabTemplate() {
    return [
        '<ul class="nav nav-tabs">',
          '<li class="nav-item" *ngFor="var pane of panes" (click)="select(pane)" role="presentation">',
            '<a class="nav-link" [class.active]="pane.active" href="javascript: false">',
              '{{pane.title}}',
            '</a>',
          '</li>',
        '</ul>',
        '<ng-content></ng-content>'
      ].join('');
  }

})(window.ngxBootstrap);