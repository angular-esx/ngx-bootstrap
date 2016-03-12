(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxRendererServiceClass = ngxRendererService;
  ngxBootstrap.ngxCores.ngxRendererService = ng.core.Class(new ngxRendererService());

  function ngxRendererService() {
    this.constructor = function () {

    };

    this.for = function (elementRef) {
      this.elementRef = elementRef;

      return this;
    };

    this.getElementAttribute = function (attribute) {
      var nativeElement = this.elementRef.nativeElement;

      if (nativeElement && attribute) {
        var _attribute = _correctElementAttribute(attribute);

        if (nativeElement.attributes && nativeElement.attributes[_attribute]) {
          return nativeElement.attributes[_attribute].value;
        }
        else if (nativeElement[_attribute]) {
          return nativeElement[_attribute];
        }
      }

      return '';
    };

    this.setElementAttribute = function (attribute, value) {
      if (attribute && value && typeof (value) === 'string') {
        var _attribute = _correctElementAttribute(attribute);

        this.elementRef.nativeElement[_attribute] = ngxBootstrap.distinct(value.split(' ')).join(' ');
      }

      return this;
    };

    this.addElementAttribute = function (attribute, value, addToFirstPosition) {
      if (attribute && value && typeof (value) === 'string') {
        var _attribute = _correctElementAttribute(attribute);
        var _value = this.getElementAttribute(attribute);

        if(_value){ 
          if(addToFirstPosition){
            _value = value + ' ' +_value;
          }
          else{
            _value += ' ' + value;
          }
        }
        else{
          _value = value;
        }

        this.elementRef.nativeElement[_attribute] = _value;
      }

      return this;
    };

    function _correctElementAttribute(attribute) {
      var _correctedAttribute;

      if (attribute == 'class') {
        _correctedAttribute = 'className';
      }
      else {
        _correctedAttribute = attribute;
      }

      return _correctedAttribute;
    }
  };

})(window.ngxBootstrap);