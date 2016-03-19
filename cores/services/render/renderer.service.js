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
        _assignValueToElementAttribute(this.elementRef.nativeElement, _correctElementAttribute(attribute), ngxBootstrap.distinct(value.split(' ')).join(' '));
      }

      return this;
    };

    this.addToElementAttribute = function (attribute, value, addToFirstPosition) {
      if (attribute && value && typeof (value) === 'string') {
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

        _assignValueToElementAttribute(this.elementRef.nativeElement, _correctElementAttribute(attribute), _value);
      }

      return this;
    };

    this.removeElementAttribute = function (attribute) {
      var _nativeElement = this.elementRef.nativeElement;

      if (_nativeElement && attribute) {
        var _attribute = _correctElementAttribute(attribute);

        if (_nativeElement.attributes) {
          ngxBootstrap.forEach(_nativeElement.attributes, function (node) {
            if (node.name == _attribute) {
              _nativeElement.attributes.removeNamedItem(_attribute);
              return true;
            }
          });
        }
        else if (_nativeElement[_attribute] !== undefined) {
          delete _nativeElement[_attribute];
        }
      }

      return this;
    };

    this.removeElementClass = function (className) {
      var _classes = this.elementRef.nativeElement.className.split(' ');
      var _index = _classes.indexOf(className);

      if (_index > -1) {
        _classes.splice(_index, 1);
      }

      this.elementRef.nativeElement.className = _classes.join(' ');

      return this;
    };

    this.addToElementClass = function (className, addToFirstPosition) {
      if (className) {
        var _classes = this.elementRef.nativeElement.className;
        if (addToFirstPosition) {
          _classes += ' ' + className;
        }
        else {
          _classes = className + ' ' + _classes;
        }

        this.elementRef.nativeElement.className = ngxBootstrap.distinct(_classes.split(' ')).join(' ');
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

    function _assignValueToElementAttribute(nativeElement, attribute, value) {
      if (nativeElement.attributes && nativeElement.attributes[attribute]) {
        ngxBootstrap.forEach(nativeElement.attributes, function (node) {
          if (node.name == attribute) {
            var _node = document.createAttribute(attribute);
            _node.value = value;

            nativeElement.attributes.setNamedItem(_node);
            return true;
          }
        });
      }
      else if(nativeElement[attribute] !== undefined) {
        nativeElement[attribute] = value;
      }
      else {
        var _node = document.createAttribute(attribute);
        _node.value = value;

        nativeElement.attributes.setNamedItem(_node);
      }
    }
  }

})(window.ngxBootstrap);