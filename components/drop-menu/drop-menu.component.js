var ngxDropMenuService = require('./services/drop-menu.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxDropMenuComponent() {
  var _base;
  var _ATTRIBUTES = {
    ID: 'id',
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxDropMenuService,

    function ngxDropMenuComponent(elementRef, ngxRenderService, ngxDropMenuService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxDropMenuService = ngxDropMenuService;

        var _self = this;
        this.ngxDropMenuService.subscribe(
          function (event) {
            if (!event || !event.id || _self.id == event.id) {
              var _actions = _self.ngxDropMenuService.getActions();

              if (event.action === _actions.TOGGLE_DROPDOWN || event.action === _actions.TOGGLE_DROPUP) {
                _self.toggle(event.action);
              }
            }
          },
          function (error) {
            console.error('ngxDropMenuService', error);
          });
      }
    }
  ];

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
      _changeRecord.type.previousValue = this.type = this.type.replace(_types.DROPDOWN, '').replace(_types.DROPUP, '').trim();
    }
    if (action === this.ngxDropMenuService.getActions().TOGGLE_DROPUP) {
      this.type = (_types.DROPUP + ' ' + _changeRecord.state.previousValue).trim();
    }
    else {
      this.type = (_types.DRODOWN + ' ' + _changeRecord.state.previousValue).trim();
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
  templateUrl: 'components/drop-menu/templates/drop-menu.bootstrap4.html',
  styleUrls: ['components/drop-menu/css/drop-menu.bootstrap4.css'],
  providers: [ngxRenderService],
  properties: ['id', 'state', 'prefixClass:prefix-class']
})
.Class(new _ngxDropMenuComponent());