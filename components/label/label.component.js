(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxLabelComponent = ng.core.Component({
    selector: 'ngx-label',
    template: '<span [class]="cssClass"><ng-content></ng-content></span>',
    styleUrls: [_getStyleUrl()],
    properties: ['color', 'type']
  })
  .Class(new _ngxLabelComponent());

  function _ngxLabelComponent() {
    var _ATTRIBUTES = {
      COLOR: 'color',
      TYPE: 'type'
    };

    this.extends = ngxBootstrap.ngxComponents.ngxBaseComponent;

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxComponents.ngxLabelService,

      function (elementRef, ngxLabelService) {
        ngxBootstrap.ngxComponents.ngxBaseComponent.call(this, elementRef);

        this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
        this.ngxLabelService = ngxLabelService;
        this.cssClass = this.ngxLabelService.prefixClass;
      }
    ];

    this.ngOnChanges = function (changeRecord) {
      this.cssClass = this.onBuildCssClass(changeRecord);
    };

    this.onBuildCssClass = function (changeRecord) {
      var _prefixClass = this.ngxLabelService.prefixClass,
          _prevColor = this.ngxLabelService.getColorClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.COLOR)),
          _currentColor = this.ngxLabelService.getColorClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.COLOR)),
          _prevType = this.ngxLabelService.getTypeClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.TYPE)),
          _currentType = this.ngxLabelService.getTypeClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.TYPE));

      var _classes = [
        _prefixClass,
        _currentColor || this.ngxLabelService.getDefaultColorClass()
      ];
      if (_currentType) { _classes.push(_currentType); }
        
      ngxBootstrap.forEach(this.cssClass.split(' '), function (className) {
        if (
            className && className != _prefixClass &&
            className != _prevColor &&
            className != _prevType
          )
        {
          _classes.push(className);
        }
      });

      return _classes.join(' ');
    };
  }
  
  function _getStyleUrl() {
    var _url = 'components/label/css/';
    return _url + (window.location.href.indexOf('theme=material') > -1 ? 'label.material.css' : 'label.bootstrap4.css');
  }

})(window.ngxBootstrap);