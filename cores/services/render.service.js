var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');

function _ngxRenderService() {
  this.constructor = function ngxRenderService() {
    this.domAdapter = new ng.platform.browser.BrowserDomAdapter();
  };

  this.for = function (nativeElement) {
    this.nativeElement = nativeElement;

    return this;
  };

  this.hasClass = function (className) {
    return this.domAdapter.hasClass(this.nativeElement, className);
  };
  this.getClass = function(){
    return this.getAttribute('class');
  };
  this.setClass = function(className){
    return this.setAttribute('class', className);
  };
  this.addClass = function (className) {
    this.domAdapter.addClass(this.nativeElement, className);
    return this;
  };
  this.insertClass = function (className, index) {
    if (!className || (index !== 0 && !index) || isNaN(index)) { return this; }

    var _currentClass = this.getClass();
    if (_currentClass) {
      var _classes = [];
      ngxBootstrap.forEach(_currentClass.split(' '), function (item) {
        if (item) { _classes.push(item); }
      });

      _classes.splice(index, 0, className);

      this.setClass(_classes.join(' '));
    }
    else{
      this.addClass(className);
    }

    return this;
  };
  this.removeClass = function (className) {
    this.domAdapter.removeClass(this.nativeElement, className);
    return this;
  };


  this.hasAttribute = function (attribute) {
    return this.domAdapter.hasAttribute(this.nativeElement, attribute);
  };
  this.getAttribute = function (attribute) {
    return this.domAdapter.getAttribute(this.nativeElement, attribute);
  };
  this.setAttribute = function (attribute, value) {
    this.domAdapter.setAttribute(this.nativeElement, attribute, value);
    return this;
  };
  this.removeAttribute = function (attribute) {
    this.domAdapter.removeAttribute(this.nativeElement, attribute);
    return this;
  };

}

module.exports = ng.core.Class(new _ngxRenderService());