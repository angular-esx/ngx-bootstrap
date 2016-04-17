(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxTabViewComponent = ng.core
    .Component({
      selector: 'ngx-tab-view',
      inputs: ['index', 'title', 'active'],
      template: '<ng-content *ngIf="active"></ng-content>',
      providers: [ngxBootstrap.ngxCores.ngxRendererService],
      events: ['onShow', 'onHide']
    })
    .Class(new _ngxTabView());

    function _ngxTabView() {
      this.constructor = function() {
        this._active = false;
        this.onShow = new ng.core.EventEmitter();
        this.onHide = new ng.core.EventEmitter();

        Object.defineProperty(this.__proto__, "active", {
          set: function(active) {
            if (active == this._active) return;

            this._active = active;

            if(active){
              this.onShow.emit({
                title: this.title
              });  
            } else {
              this.onHide.emit({
                title: this.title
              });
            }
          },
          get: function () {
            return this._active;
          },
          enumerable: true,
          configurable: true
        });
      };
    }

})(window.ngxBootstrap);