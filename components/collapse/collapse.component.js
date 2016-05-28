var ngxCollapseService = require('./services/collapse.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxCollapseComponent() {
  var _base,
      _subscription;
  var _ATTRIBUTES = {
    ID: 'id',
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxCollapseService,

    function ngxCollapseComponent(elementRef, ngxRenderService, ngxCollapseService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxCollapseService = ngxCollapseService;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    _getBaseInstance(this).ngOnChanges.apply(this, arguments);

    if (this.ngxCollapseService.isActiveStateClass(this.getPrefixClass(), this.state)) {
      this.ngxCollapseService.collapseIn(this.elementRef.nativeElement);
    }
    else {
      this.ngxCollapseService.collapseOut(this.elementRef.nativeElement);
    }
  };

  this.ngOnInit = function () {
    if (this.elementRef) { this.subscribe(); }
  };

  this.ngOnDestroy = function () {
    if (_subscription) { _subscription.unsubscribe(); }
  };

  this.subscribe = function () {
    var _self = this;
    _subscription = this.ngxCollapseService.ngxCollapse$.subscribe(function (event) {
      if (!event) { return; }

      var _events = ngxBootstrap.isArray(event) ? event : [event];
      var _actions = _self.ngxCollapseService.getActions();

      ngxBootstrap.forEach(_events, function (_event) {
        if (!_event.id || _self.id === _event.id) {
          if (_event.type === _actions.TOGGLE_COLLAPSE) {
            _self.toggle();
          }
          else if (_event.type === _actions.SHOW_COLLAPSE) {
            _self.show();
          }
          else if (_event.type === _actions.HIDE_COLLAPSE) {
            _self.hide();
          }
        }
        else if (_event.id && _event.group && _event.id !== _self.id && _event.group === _self.group) {
          _self.hide();
        }
      });
    });
  };

  this.toggle = function () {
    if (this.ngxCollapseService.isActiveStateClass(this.getPrefixClass(), this.state)) {
      if (this.group) {
        this.ngxCollapseService.hide(this.id, this.group);
      }
      else {
        this.hide();
      }
    }
    else {
      if (this.group) {
        this.ngxCollapseService.show(this.id, this.group);
      }
      else {
        this.show();
      }
    }
  };

  this.show = function () {
    if (this.ngxCollapseService.isActiveStateClass(this.getPrefixClass(), this.state)) { return; }

    var _changeRecord = {
      state: { previousValue: this.state || '' }
    };
    this.state = (this.ngxCollapseService.getStates().ACTIVE + ' ' + _changeRecord.state.previousValue).trim();
    _changeRecord.state.currentValue = this.state;

    this.ngOnChanges(_changeRecord);
  };

  this.hide = function () {
    if (!this.ngxCollapseService.isActiveStateClass(this.getPrefixClass(), this.state)) { return; }

    var _changeRecord = {
      state: { previousValue: this.state || '' }
    };
    this.state = this.state.replace(this.ngxCollapseService.getStates().ACTIVE, '').trim();
    _changeRecord.state.currentValue = this.state;

    this.ngOnChanges(_changeRecord);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-collapse',
  /*Inject template at here*/
  /*Inject style at here*/
  providers: [ngxRenderService],
  properties: ['id', 'state', 'group', 'prefixClass:prefix-class']
})
.Class(new _ngxCollapseComponent());