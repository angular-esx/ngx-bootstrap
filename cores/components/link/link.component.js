﻿var ngxLinkService = require('./services/link.service.js');
var ngxRenderService = require('./../../services/render.service.js');
var ngxBaseComponent = require('./../base/base.component.js');
var ngxBootstrap = require('./../../ngx-bootstrap.js');
ngxBootstrap = require('./../../ngx-bootstrap.utils.js');

function _ngxLinkComponent() {
  var _base;
  var _ATTRIBUTES = {
    HREF: 'href',
    HREF_LANG: 'hreflang',
    MEDIA_QUERY: { name: 'media',  alias: 'media-query' },
    MEDIA_TYPE: { name: 'type',  alias: 'media-type' },
    REL: 'rel',
    TARGET: 'target',
    COLOR: 'color',
    TYPE: 'type',
    SIZE: 'size',
    STATE: 'state'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxLinkService,

    function ngxLinkComponent (elementRef, ngxRenderService, ngxLinkService) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.ngxLinkService = ngxLinkService;
      }
    }
  ];

  this.ngOnChanges = function(changeRecord) {
    _getBaseInstance(this).ngOnChanges.apply(this, arguments);
    
    if(this.link){
      var _property, _self = this; 
      var _attributes = [
        _ATTRIBUTES.HREF_LANG,
        _ATTRIBUTES.MEDIA_QUERY.name,
        _ATTRIBUTES.MEDIA_TYPE.name,
        _ATTRIBUTES.REL,
        _ATTRIBUTES.TARGET
      ];
      
      this.ngxRenderService.for(this.link.nativeElement);

      ngxBootstrap.forEach(_attributes, function (attribute) {
        _property = changeRecord[attribute];

        if (_property && (_property.isFirstChange() || _property.previousValue != _property.currentValue)) {
          if (_property.currentValue) {
            _self.ngxRenderService.setAttribute(attribute, _property.currentValue);
          }
          else {
            _self.ngxRenderService.removeAttribute(attribute);
          }
        }
      });

      this.ngxRenderService.for(this.elementRef.nativeElement);
    }
    
  };
  
  this.ngOnInit = function () {
    if (this.elementRef) {
      if (!this.href) { this.href = '#'; }
    }
  };

  this.ngAfterViewInit = function () {
    _getBaseInstance(this).ngAfterViewInit.apply(this);
    
    var _self = this, _attributes = [
      _ATTRIBUTES.HREF,
      _ATTRIBUTES.HREF_LANG,
      _ATTRIBUTES.MEDIA_QUERY.alias,
      _ATTRIBUTES.MEDIA_TYPE.alias,
      _ATTRIBUTES.REL,
      _ATTRIBUTES.TARGET
    ];
    
    this.removeOneTimeBindingAttributes(_attributes);
    
    if(this.link){
      this.ngxRenderService.for(this.link.nativeElement);
      _attributes.splice(0, 1);
      
      ngxBootstrap.forEach(_attributes, function(attribute) {
        if(_self[attribute]){
          _self.ngxRenderService.setAttribute(attribute, _self[attribute]);
        }
      });
      
      this.ngxRenderService.for(this.elementRef.nativeElement);
    }
  };
  
  this.click = function ($event) {
    if (this.ngxLinkService.isDisabledStateClass(this.getPrefixClass(), this.state)) {
      $event.preventDefault();
      $event.stopPropagation();
      return;
    }  
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-link',
  template: '<a #link [href]="href" (click)="click($event)"><ng-content></ng-content></a>',
  providers: [ngxRenderService],
  queries: {
    link: new ng.core.ViewChild('link')
  },
  properties: ['href', 'hreflang', 'media-query', 'media-type', 'rel', 'target', 'color', 'type', 'size', 'state', 'prefixClass:prefix-class']
})
.Class(new _ngxLinkComponent());