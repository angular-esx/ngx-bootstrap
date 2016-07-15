var ngxTypeService = require('typeService');
var ngxBootstrap = require('ngxBootstrap');

function _ngxGridService() {
  var _MAX_COLUMNS = 12;
  var _GRID_TIERS = {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
  };

  var _ROW_JUSTIFY_CONTENTS,
      _ROW_ALIGN_CONTENTS,
      _ROW_ALIGN_ITEMS,
      _COLUMN_SIZES,
      _COLUMN_OFFSETS,
      _COLUMN_ORDERS,
      _COLUMN_ALIGN_SELFS;

  this.constructor = [
    ngxTypeService,

    function ngxGridService(ngxTypeService) {
      ngxBootstrap.shallowCopy(this, ngxTypeService);
    }
  ];


  this.getRowJustifyContents = function () {
    if (!_ROW_JUSTIFY_CONTENTS) {
      var _justifyContents = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
      _ROW_JUSTIFY_CONTENTS = {};

      ngxBootstrap.forEach(_GRID_TIERS, function (breakpointValue, breakpointName) {
        ngxBootstrap.forEach(_justifyContents, function (justifyContent) {
          _ROW_JUSTIFY_CONTENTS[breakpointName + '_' + justifyContent.toUpperCase().replace('-', '_')] = breakpointValue + '-' + justifyContent;
        });
      });
    }

    return ngxBootstrap.shallowCopy({}, _ROW_JUSTIFY_CONTENTS);
  };

  this.getRowJustifyContentClass = function (prefixClass, justifyContents) {
    if (!justifyContents) { return '';}

    var _justifyContents = justifyContents.split(' ');
    var _args, _justifyContentClasses = [];

    ngxBootstrap.forEach(_justifyContents, function (justifyContent) {
      _args = justifyContent.split('-');

      if (_args.length === 2) {
        _justifyContentClasses.push(prefixClass + '-' + _args[0].toLowerCase() + '-justify-content-' + _args[1]);
      }
      else if (_args.length === 3) {
        _justifyContentClasses.push(prefixClass + '-' + _args[0].toLowerCase() + '-justify-content-' + _args[1] + '_' + _args[2]);
      }
    });

    return _justifyContentClasses.length === 0 ? '' : _justifyContentClasses.join(' ');
  };



  this.getRowAlginContents = function () {
    if (!_ROW_ALIGN_CONTENTS) {
      var _alignContents = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
      _ROW_ALIGN_CONTENTS = {};

      ngxBootstrap.forEach(_GRID_TIERS, function (breakpointValue, breakpointName) {
        ngxBootstrap.forEach(_alignContents, function (alignContent) {
          _ROW_ALIGN_CONTENTS[breakpointName + '_' + alignContent.toUpperCase().replace('-', '_')] = breakpointValue + '-' + alignContent;
        });
      });
    }

    return ngxBootstrap.shallowCopy({}, _ROW_ALIGN_CONTENTS);
  };

  this.getRowAlignContentClass = function (prefixClass, alignContents) {
    if (!alignContents) { return ''; }

    var _alignContents = alignContents.split(' ');
    var _args, _alignContentClasses = [];

    ngxBootstrap.forEach(_alignContents, function (alignContent) {
      _args = alignContent.split('-');

      if (_args.length === 2) {
        _alignContentClasses.push(prefixClass + '-' + _args[0].toLowerCase() + '-align-content-' + _args[1]);
      }
      else if (_args.length === 3) {
        _alignContentClasses.push(prefixClass + '-' + _args[0].toLowerCase() + '-align-content-' + _args[1] + '_' + _args[2]);
      }
    });

    return _alignContentClasses.length === 0 ? '' : _alignContentClasses.join(' ');
  };



  this.getRowAlginItems = function () {
    if (!_ROW_ALIGN_ITEMS) {
      var _alignItems = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
      _ROW_ALIGN_ITEMS = {};

      ngxBootstrap.forEach(_GRID_TIERS, function (breakpointValue, breakpointName) {
        ngxBootstrap.forEach(_alignItems, function (value) {
          _ROW_ALIGN_ITEMS[breakpointName + '_' + value.toUpperCase().replace('-', '_')] = breakpointValue + '-' + value;
        });
      });
    }

    return ngxBootstrap.shallowCopy({}, _ROW_ALIGN_ITEMS);
  };

  this.getRowAlignItemsClass = function (prefixClass, alignItems) {
    if (!alignItems) { return ''; }

    var _alignItems = alignItems.split(' ');
    var _args, _alignItemsClasses = [];

    ngxBootstrap.forEach(_alignItems, function (value) {
      _args = value.split('-');

      if (_args.length === 2) {
        _alignItemsClasses.push(prefixClass + '-' + _args[0].toLowerCase() + '-align-items-' + _args[1]);
      }
      else if (_args.length === 3) {
        _alignItemsClasses.push(prefixClass + '-' + _args[0].toLowerCase() + '-align-items-' + _args[1] + '_' + _args[2]);
      }
    });

    return _alignItemsClasses.length === 0 ? '' : _alignItemsClasses.join(' ');
  };



  this.getColumnSizes = function () {
    if (!_COLUMN_SIZES) {
      _COLUMN_SIZES = {};

      ngxBootstrap.forEach(_GRID_TIERS, function (breakpointValue, breakpointName) {
        for (var i = 1; i <= _MAX_COLUMNS; i++) {
          _COLUMN_SIZES[breakpointName + '_' + i] = breakpointValue + '-' + i;
        }
      });
    }

    return ngxBootstrap.shallowCopy({}, _COLUMN_SIZES);
  };

  this.getColumnSizeClass = function (prefixClass, sizes) {
    if (!sizes) { return ''; }

    var _sizes = sizes.split(' ');
    var _args, _sizeClasses = [];

    ngxBootstrap.forEach(_sizes, function (size) {
      _args = size.split('-');

      if (_args.length === 2) {
        _sizeClasses.push(prefixClass + '-' + _args[0].toLowerCase() + '-size-' + _args[1]);
      }
    });

    return _sizeClasses.length === 0 ? '' : _sizeClasses.join(' ');
  };



  this.getColumnOffsets = function () {
    if (!_COLUMN_OFFSETS) {
      _COLUMN_OFFSETS = {};

      ngxBootstrap.forEach(_GRID_TIERS, function (breakpointValue, breakpointName) {
        for (var i = 0; i <= _MAX_COLUMNS; i++) {
          _COLUMN_OFFSETS[breakpointName + '_' + i] = breakpointValue + '-' + i;
        }
      });
    }

    return ngxBootstrap.shallowCopy({}, _COLUMN_OFFSETS);
  };

  this.getColumnOffsetClass = function (prefixClass, offsets) {
    if (!offsets) { return ''; }

    var _offsets = offsets.split(' ');
    var _args, _offsetClasses = [];

    ngxBootstrap.forEach(_offsets, function (offset) {
      _args = offset.split('-');

      if (_args.length === 2) {
        _offsetClasses.push(prefixClass + '-' + _args[0].toLowerCase() + '-offset-' + _args[1]);
      }
    });

    return _offsetClasses.length === 0 ? '' : _offsetClasses.join(' ');
  };



  this.getColumnOrders = function () {
    if (!_COLUMN_ORDERS) {
      _COLUMN_ORDERS = {};

      ngxBootstrap.forEach(_GRID_TIERS, function (breakpointValue, breakpointName) {
        for (var i = 0; i <= _MAX_COLUMNS; i++) {
          _COLUMN_ORDERS[breakpointName + '_' + i] = breakpointValue + '-' + i;
        }
      });
    }

    return ngxBootstrap.shallowCopy({}, _COLUMN_ORDERS);
  };

  this.getColumnOrderClass = function (prefixClass, orders) {
    if (!orders) { return ''; }

    var _orders = orders.split(' ');
    var _args, _orderClasses = [];

    ngxBootstrap.forEach(_orders, function (order) {
      _args = order.split('-');

      if (_args.length === 2) {
        _orderClasses.push(prefixClass + '-' + _args[0].toLowerCase() + '-order-' + _args[1]);
      }
    });

    return _orderClasses.length === 0 ? '' : _orderClasses.join(' ');
  };


  this.getColumnAlignSelfs = function () {
    if (!_COLUMN_ALIGN_SELFS) {
      var _alignSelfs = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
      _COLUMN_ALIGN_SELFS = {};

      ngxBootstrap.forEach(_GRID_TIERS, function (breakpointValue, breakpointName) {
        ngxBootstrap.forEach(_alignSelfs, function (alignSelf) {
          _COLUMN_ALIGN_SELFS[breakpointName + '_' + alignSelf.toUpperCase().replace('-', '_')] = breakpointValue + '-' + alignSelf;
        });
      });
    }

    return ngxBootstrap.shallowCopy({}, _COLUMN_ALIGN_SELFS);
  };

  this.getColumnAlignSelfClass = function (prefixClass, alignSelfs) {
    if (!alignSelfs) { return ''; }

    var _alignSelfs = alignSelfs.split(' ');
    var _args, _alignSelfClasses = [];

    ngxBootstrap.forEach(_alignSelfs, function (alignSelf) {
      _args = alignSelf.split('-');

      if (_args.length === 2) {
        _alignSelfClasses.push(prefixClass + '-' + _args[0].toLowerCase() + '-align-self-' + _args[1]);
      }
      else if (_args.length === 3) {
        _alignSelfClasses.push(prefixClass + '-' + _args[0].toLowerCase() + '-align-self-' + _args[1] + '_' + _args[2]);
      }
    });

    return _alignSelfClasses.length === 0 ? '' : _alignSelfClasses.join(' ');
  };
}

module.exports = ng.core.Class(new _ngxGridService());