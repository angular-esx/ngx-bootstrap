var ngxWindowService = require('windowService');
var ngxBootstrap = require('utils');

function _ngxRenderService() {
  this.constructor = [ngxWindowService, function ngxRenderService(ngxWindowService) {
    this.domAdapter = new ng.platform.browser.BrowserDomAdapter();
    this.ngxWindowService = ngxWindowService;
  }];

  this.for = function (nativeElement) {
    this.nativeElement = nativeElement;

    return this;
  };

  this.getInnerHTML = function () {
    return this.domAdapter.getInnerHTML(this.nativeElement);
  };
  this.setInnerHTML = function (value) {
    this.domAdapter.setInnerHTML(this.nativeElement, value);
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


  this.hasStyle = function(styleName, styleValue){
    return this.domAdapter.hasStyle(this.nativeElement, styleName, styleValue);
  };
  this.getStyle = function(styleName){
    return this.domAdapter.removeStyle(this.nativeElement, styleName);
  };
  this.getComputedStyle = function(){
    return this.domAdapter.getComputedStyle(this.nativeElement);
  };
  this.addStyle = function(styleName, styleValue){
    this.domAdapter.setStyle(this.nativeElement, styleName, styleValue);
    return this;
  };
  this.removeStyle = function(styleName){
    this.domAdapter.removeStyle(this.nativeElement, styleName);
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


  this.getOffset = function () {
    var _boundingClientRect = this.nativeElement.getBoundingClientRect();

    return {
      width: _boundingClientRect.width || this.nativeElement.offsetWidth,
      height: _boundingClientRect.height || this.nativeElement.offsetHeight,
      top: _boundingClientRect.top + (this.ngxWindowService.window.pageYOffset || this.ngxWindowService.document.documentElement.scrollTop),
      left: _boundingClientRect.left + (this.ngxWindowService.window.pageXOffset || this.ngxWindowService.document.documentElement.scrollLeft)
    };
  };
}

module.exports = ng.core.Class(new _ngxRenderService());