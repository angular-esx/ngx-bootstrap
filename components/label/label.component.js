var ngxLabelService = require('./services/label.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

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
    var _prefixClass = this.ngxLabelService.prefixClass;
    
    var _prevColor, _currentColor;
    if(this.ngxLabelService.getColorClass){
      _prevColor = this.ngxLabelService.getColorClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.COLOR));
      _currentColor = this.ngxLabelService.getColorClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.COLOR));
    }
    
    var _prevType, _currentType;
    if(this.ngxLabelService.getTypeClass){
      _prevType = this.ngxLabelService.getTypeClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.TYPE));
      _currentType = this.ngxLabelService.getTypeClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.TYPE));
    }

    var _classes = [
      _prefixClass,
      _currentColor || this.ngxLabelService.getDefaultColorClass()
    ];
    if (_currentType) { _classes.push(_currentType); }
      
    ngxBootstrap.forEach(this.cssClass.split(' '), function (className) {
      if (
          className && className != _prefixClass &&
          (!_prevColor || _prevColor.indexOf(className) === -1) &&
          (!_prevType || _prevType.indexOf(className) === -1)
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
  templateUrl: 'components/label/templates/label.bootstrap4.html',
  styleUrls: ['components/label/css/label.bootstrap4.css'],
  properties:['color', 'type']
})
.Class(new _ngxLabelComponent());