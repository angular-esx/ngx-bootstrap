var ngxToggleButtonService = require('./services/toggle-button.service.js');
var ngxButtonComponent = require('./../../components/button/button.component.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxToggleButtonComponent() {
  var _base;
  var _ATTRIBUTES = {
    ID: 'id'
  };

  this.extends = ngxButtonComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxToggleButtonService,

    function ngxToggleButtonComponent(elementRef, ngxRenderService, ngxToggleButtonService) {
      ngxButtonComponent.apply(this, arguments);
      
      this.ngxToggleButtonService = ngxToggleButtonService;

      if(elementRef){
       this.toggleEmitter = new ng.core.EventEmitter(false); 
      }
    }
  ]; 

  this.toggle = function () {
    if(!this.ngxToggleButtonService.isDisabledStateClass(this.state)){
      var _isActive = this.ngxToggleButtonService.isActiveStateClass(this.state);
      var _isCanceled = false;
      
      this.toggleEmitter.next({
        target: { id: this.id, active: !_isActive },
        cancel: function() { _isCanceled = true; }
      }); 
      
      if(_isCanceled){ return; }
      
      var _changeRecord = {
        state:{ previousValue: this.state || '' }
      };
      if(_isActive){
        this.state = this.state.replace(this.ngxToggleButtonService.getStates().ACTIVE, '').trim();
      }
      else{
        this.state = (this.ngxToggleButtonService.getStates().ACTIVE + ' ' + _changeRecord.state.previousValue).trim();
      }
      _changeRecord.state.currentValue = this.state;
      
      this.ngOnChanges(_changeRecord);
    }
  };
  
  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxButtonComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-toggle-button',
  templateUrl: 'components/toggle-button/templates/toggle-button.bootstrap4.html',
  styleUrls: ['components/toggle-button/css/toggle-button.bootstrap4.css'],
  providers: [ngxRenderService],
  host: {
    '(click)': 'toggle()'
  },
  properties: ['id', 'color', 'size', 'state'],
  events: ['toggleEmitter: toggle']
})
.Class(new _ngxToggleButtonComponent());