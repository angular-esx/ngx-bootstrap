var ngxLabelService = require('./services/label.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');

function _ngxLabelComponent() {
  var _ATTRIBUTES = {
    COLOR: 'color',
    TYPE: 'type'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxLabelService,

    function (elementRef, ngxLabelService) {
      ngxBaseComponent.call(this, elementRef);

      this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
      this.ngxLabelService = ngxLabelService;
      this.cssClass = this.ngxLabelService.prefixClass;
    }
  ];

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

module.exports = ng.core.Component({
  selector: 'ngx-label',
  /*Inject template at here*/
  /*Inject style at here*/
  properties: ['color', 'type'],
})
.Class(new _ngxLabelComponent());