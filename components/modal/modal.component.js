import * as ngCore from '@angular/core';
import { ngxBaseComponent, ngxUtils } from  '../../cores';
import { ngxModalService } from './services/modal.service';
import { ngxBackdropService } from '../../components/backdrop';

function _ngxModalComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,
    ngxModalService,
    ngxBackdropService,

    function ngxModalComponent(elementRef, renderer, ngxModalService, ngxBackdropService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxModalService = ngxModalService;
        this.ngxBackdropService = ngxBackdropService;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    if (ngxUtils.isEmpty(this.id)) { throw 'Must provide id to ngxModal'; }

    var _self = this,
    _styleProperties = this.getStyleProperties();

    this.isActive = this.propertyHasValue(_styleProperties.STATE, 'active');

    if (ngxUtils.isNull(this.state)) {
      _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);
      return;
    }

    var _classes = document.body.className.split(' ');

    if (this.isActive) {
      _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);
  
      _classes.push(this.buildCssClassForProperty(_styleProperties.STATE, this.state));

      this.renderer.setElementProperty(document.body, 'className', _classes.join(' ').trim());

      this.ngxBackdropService.show();

      this.ngxModalService.fadeIn(this.elementRef);
    }
    else {
      this.ngxBackdropService.hide();

      ngxUtils.splice(_classes, this.getPrefixClass(), function (prefixClass, cssClass) {
        return cssClass.indexOf(prefixClass) === 0;
      });

      this.ngxModalService.fadeOut(this.elementRef).then(function () {
        _getBaseInstance(_self).ngOnChanges.apply(_self, [changeRecord]);

        _self.renderer.setElementProperty(document.body, 'className', _classes.join(' ').trim());
      });
    }
  };

  this.ngOnInit = function () {
    this.subscribe();

    _getBaseInstance(this).ngOnInit.apply(this);
  };

  this.ngOnDestroy = function () {
    if (this.subscription) { this.subscription.unsubscribe(); }

    _getBaseInstance(this).ngOnDestroy.apply(this);
  };

  this.initDefaultValues = function () {
    if (ngxUtils.isEmpty(this.state) && ngxUtils.isNull(this.isActive)) {
      this.isActive = false;
    }

    return null;
  };

  this.getPrefixClass = function () {
    return 'ngx-modal';
  };

  this.subscribe = function () {
    var _self = this;

    this.subscription = this.ngxModalService.ngxModal$.subscribe(function (event) {
      if (ngxUtils.isEmpty(event)) { return; }

      var _events = ngxUtils.isArray(event) ? event : [event];
      var _actions = _self.ngxModalService.getActions();

      ngxUtils.forEach(_events, function (_event) {
        if (!ngxUtils.isEmpty(_event.id) && _event.id === _self.id) {
          if (_event.type === _actions.SHOW_MODAL) {
            _self.show();
          }
          else if (_event.type === _actions.HIDE_MODAL) {
            _self.hide();
          }
        }
      });
    });
  };

  this.show = function () {
    if (this.isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    this.addValueToProperty(_styleProperties.STATE, 'active');

    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  };

  this.hide = function () {
    if (!this.isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    this.removeValueFromProperty(_styleProperties.STATE, 'active');

    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  };

  this.click = function (event) {
    if
    (
        !ngxUtils.isEmpty(this.id) && this.id == event.target.id &&
        this.isActive &&
        !this.propertyHasValue(this.getStyleProperties().TYPE, 'static')
    ) {
      this.hide();
    }
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var ngxModalComponent = ngCore.Component({
  selector: 'ngx-modal',
  templateUrl: './templates/modal.html',
  styleUrls: ['./scss/modal.scss'],
  properties: ['id', 'type', 'size', 'backdropColor:backdrop-color', 'initCssClass:class'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxModalComponent());