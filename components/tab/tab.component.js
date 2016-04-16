(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxTabComponent = ng.core
    .Component({
      selector: 'ngx-tab',
      template: _getNgxTabTemplate()
    })
    .Class({
      constructor: [
        [new ng.core.Query(ngxBootstrap.ngxComponents.ngxTabViewComponent), function() {}],
        function (panes) {
          this.panes = panes;
        }
      ],

      select: function(pane) {
        this.panes.map(function(p){
          p.active = p == pane;
        });
      }
    });

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