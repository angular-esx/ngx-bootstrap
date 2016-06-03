var ngxDropMenuService = require('./services/drop-menu.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxDropMenuComponent() {
  var _base,
      _subscription;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxDropMenuService,

    function ngxDropMenuComponent(elementRef, ngxRenderService, ngxDropMenuService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxDropMenuService = ngxDropMenuService;
      }
    }
  ];

  this.ngAfterContentInit = function () {
    this.subscribe();

    _getBaseInstance(this).ngAfterContentInit.apply(this);
  };

  this.ngOnDestroy = function () {
    if (_subscription) { _subscription.unsubscribe(); }
  };

  this.subscribe = function () {
    var _self = this;

    _subscription = this.ngxDropMenuService.ngxDropMenu$.subscribe(function (event) {
      if (!event) { return; }

      var _events = ngxBootstrap.isArray(event) ? event : [event];
      var _actions = _self.ngxDropMenuService.getActions();

      ngxBootstrap.forEach(_events, function (_event) {
        if (_event.target && _event.target === _self.elementRef.nativeElement) {

          if (_event.type === _actions.TOGGLE_DROPDOWN || _event.type === _actions.TOGGLE_DROPUP) {
            _self.toggle(_event.type);
          }
        }
      });
    });
  };

  this.toggle = function (action) {
    var _isActive = this.ngxDropMenuService.isActiveStateClass(this.getPrefixClass(), this.state);
    var _types = this.ngxDropMenuService.getTypes();

    var _changeRecord = {
      state: { previousValue: this.state || '' },
      type: { previousValue: this.type || '' }
    };
    if (_isActive) {
      this.state = this.state.replace(this.ngxDropMenuService.getStates().ACTIVE, '').trim();
    }
    else {
      this.state = (this.ngxDropMenuService.getStates().ACTIVE + ' ' + _changeRecord.state.previousValue).trim();
    }
    _changeRecord.state.currentValue = this.state;
    
    if(_changeRecord.type.previousValue){
      _changeRecord.type.previousValue = this.type = _changeRecord.type.previousValue.replace(_types.DROPDOWN, '').replace(_types.DROPUP, '').trim();
    }
    if (action === this.ngxDropMenuService.getActions().TOGGLE_DROPUP) {
      this.type = (_types.DROPUP + ' ' + _changeRecord.state.previousValue).trim();
    }
    else {
      this.type = (_types.DROPDOWN + ' ' + _changeRecord.state.previousValue).trim();
    }
    _changeRecord.type.currentValue = this.type;

    this.ngOnChanges(_changeRecord);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-drop-menu',
  /*Inject template at here*/
  /*Inject style at here*/
  providers: [ngxRenderService],
  properties: ['state', 'prefixClass:prefix-class']
})
.Class(new _ngxDropMenuComponent());