import * as ngCore from '@angular/core';
import { ngxBaseComponent, ngxUtils } from  '../../cores';
import { ngxBackdropObserver } from './services/backdrop.observer';

function _ngxBackdropComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,
    ngxBackdropObserver,

    function ngxBackdropComponent(elementRef, renderer, ngxBackdropObserver) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxBackdropObserver = ngxBackdropObserver;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    var _self = this;
        _styleProperties = this.getStyleProperties();

    this.isActive = this.propertyHasValue(_styleProperties.STATE, 'active');

    if (this.isActive) {
      _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);

      this.ngxBackdropObserver.fadeIn(this.elementRef);
    }
    else {
      this.ngxBackdropObserver.fadeOut(this.elementRef).then(function () {
        _getBaseInstance(_self).ngOnChanges.apply(_self, [changeRecord]);
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
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (ngxUtils.isEmpty(this.color)) {
      this.color = 'default';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    }
    
    if (ngxUtils.isEmpty(this.state) && ngxUtils.isNull(this.isActive)) {
      this.isActive = false;
    }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-backdrop';
  };

  this.subscribe = function () {
    var _self = this;

    this.subscription = this.ngxBackdropObserver.ngxBackdrop$.subscribe(function (event) {
      if (ngxUtils.isEmpty(event)) { return; }

      var _events = ngxUtils.isArray(event) ? event : [event];
      var _actions = _self.ngxBackdropObserver.getActions();
      
      ngxUtils.forEach(_events, function (_event) {
        if (_event.type === _actions.SHOW_BACKDROP) {
          _self.show();
        }
        else if (_event.type === _actions.HIDE_BACKDROP) {
          _self.hide();
        }
      });
    });
  };

  this.show = function () {
    if (this.isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    this.addValueToProperty(_styleProperties.STATE, 'active');

    var _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    this.buildChangeRecord(_styleProperties.STATE, this.state, null, _changeRecord);

    this.ngOnChanges(_changeRecord);
  };

  this.hide = function () {
    if (!this.isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    this.removeValueFromProperty(_styleProperties.STATE, 'active');

    var _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    this.buildChangeRecord(_styleProperties.STATE, this.state, null, _changeRecord);

    this.ngOnChanges(_changeRecord);
  };

  this.click = function () {
    this.ngxBackdropObserver.click(this.isActive);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var ngxBackdropComponent = ngCore.Component({
  selector: 'ngx-backdrop',
  templateUrl: './templates/backdrop.html',
  styleUrls: ['./scss/backdrop.scss'],
  properties: ['color', 'initCssClass:class'],
  host: {
    '(click)': 'click()'
  }
})
.Class(new _ngxBackdropComponent());