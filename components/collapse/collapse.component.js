(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxCollapseComponent = ng.core.Component({
    selector: '[ngx-collapse], ngx-collapse',
    template: '<ng-content></ng-content>',
    providers: [ngxBootstrap.ngxCores.ngxRendererService],
    inputs: ['transitionDuration', 'collapse'],
    host: {
      '[style.display]': 'display',
      '[class.in]': 'isExpanded',
      '[attr.aria-expanded]': 'isExpanded',
      '[attr.aria-hidden]': 'isCollapsed',
      '[class.collapse]': 'isCollapse',
      '[class.collapsing]': 'isCollapsing',
    }
  })
  .Class(new _ngxCollapse());

  function _ngxCollapse() {
    var _ATTRIBUTES = {
      COLOR: 'color',
      TYPE: 'type'
    };

    this.constructor = [
      ng.platform.browser.BROWSER_APP_PROVIDERS[0][16], // animationBuilder
      ngxBootstrap.ngxCores.ngxRendererService,
      ng.core.ElementRef,
      function (animationBuilder, ngxRendererService, elementRef) {
        this.transitionDuration = 500;
        this.elementRef = elementRef;

        this.animation = animationBuilder.css();
        this.animation.setDuration(this.transitionDuration);

        Object.defineProperty(this.__proto__, "collapse", {
          set: function(value) {
            this.isExpanded = value;
            this.toggle();
          },
          get: function () {
            return this.isExpanded;
          },
          enumerable: true,
          configurable: true
        });
      }
    ];

    this.toggle = function () {
      if (this.isExpanded) {
        this.hide();
      } else {
        this.show();
      }
    };

    this.hide = function() {
      var self = this;

      this.isCollapse = false;
      this.isCollapsing = true;

      this.isExpanded = false;
      this.isCollapsed = true;

      setTimeout(function() {
          // self.height = '0';
          // self.isCollapse = true;
          // self.isCollapsing = false;
          self.animation
            .setFromStyles({
              height: self.elementRef.nativeElement.scrollHeight + 'px'
            })
            .setToStyles({
              height: '0',
              overflow: 'hidden'
            });

          self.animation.start(self.elementRef.nativeElement)
            .onComplete(() => {
              if (self.elementRef.nativeElement.offsetHeight === 0) {
                self.display = 'none';
              }

              self.isCollapse = true;
              self.isCollapsing = false;
            });
        }, 4);
    }

    this.show = function() {
      var self = this;

      this.isCollapse = false;
      this.isCollapsing = true;

      this.isExpanded = true;
      this.isCollapsed = false;

      this.display = '';

      setTimeout(function() {
        // self.height = 'auto';
        // self.isCollapse = true;
        // self.isCollapsing = false;
        self.animation
          .setFromStyles({
            height: self.elementRef.nativeElement.offsetHeight,
            overflow: 'hidden'
          })
          .setToStyles({
            height: self.elementRef.nativeElement.scrollHeight + 'px'
          });

        self.animation
          .start(self.elementRef.nativeElement)
          .onComplete(() => {
            self.isCollapse = true;
            self.isCollapsing = false;
          });
      }, 4);
    }
  }

})(window.ngxBootstrap);