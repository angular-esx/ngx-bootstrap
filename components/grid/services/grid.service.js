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

  this.isFluidTypeClass = function (prefixClass, type) {
    return this.getTypeClass(prefixClass, type).indexOf(this.getFluidTypeClass(prefixClass)) > -1;
  };
  this.getFluidTypeClass = function (prefixClass) {
    return prefixClass + '-type-fluid';
  };



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

  this.isExtraSmallRowJustifyContentClass = function (prefixClass, justifyContents) {
    return justifyContents.indexOf(prefixClass + '-' + _GRID_TIERS.XS + '-justify-content-') > -1;
  };

  this.isSmallRowJustifyContentClass = function (prefixClass, justifyContents) {
    return justifyContents.indexOf(prefixClass + '-' + _GRID_TIERS.SM + '-justify-content-') > -1;
  };

  this.isMediumRowJustifyContentClass = function (prefixClass, justifyContents) {
    return justifyContents.indexOf(prefixClass + '-' + _GRID_TIERS.MD + '-justify-content-') > -1;
  };

  this.isLargeRowJustifyContentClass = function (prefixClass, justifyContents) {
    return justifyContents.indexOf(prefixClass + '-' + _GRID_TIERS.LG + '-justify-content-') > -1;
  };

  this.isExtraLargeRowJustifyContentClass = function (prefixClass, justifyContents) {
    return justifyContents.indexOf(prefixClass + '-' + _GRID_TIERS.XL + '-justify-content-') > -1;
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

  this.isExtraSmallRowAlignContentClass = function (prefixClass, alignContents) {
    return alignContents.indexOf(prefixClass + '-' + _GRID_TIERS.XS + '-align-content-') > -1;
  };

  this.isSmallRowAlignContentClass = function (prefixClass, alignContents) {
    return alignContents.indexOf(prefixClass + '-' + _GRID_TIERS.SM + '-align-content-') > -1;
  };

  this.isMediumRowAlignContentClass = function (prefixClass, alignContents) {
    return alignContents.indexOf(prefixClass + '-' + _GRID_TIERS.MD + '-align-content-') > -1;
  };

  this.isLargeRowAlignContentClass = function (prefixClass, alignContents) {
    return alignContents.indexOf(prefixClass + '-' + _GRID_TIERS.LG + '-align-content-') > -1;
  };

  this.isExtraLargeRowAlignContentClass = function (prefixClass, alignContents) {
    return alignContents.indexOf(prefixClass + '-' + _GRID_TIERS.XL + '-align-content-') > -1;
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

  this.isExtraSmallRowAlignItemsClass = function (prefixClass, alignItems) {
    return alignItems.indexOf(prefixClass + '-' + _GRID_TIERS.XS + '-align-items-') > -1;
  };

  this.isSmallRowAlignItemsClass = function (prefixClass, alignItems) {
    return alignItems.indexOf(prefixClass + '-' + _GRID_TIERS.SM + '-align-items-') > -1;
  };

  this.isMediumRowAlignItemsClass = function (prefixClass, alignItems) {
    return alignItems.indexOf(prefixClass + '-' + _GRID_TIERS.MD + '-align-items-') > -1;
  };

  this.isLargeRowAlignItemsClass = function (prefixClass, alignItems) {
    return alignItems.indexOf(prefixClass + '-' + _GRID_TIERS.LG + '-align-items-') > -1;
  };

  this.isExtraLargeRowAlignItemsClass = function (prefixClass, alignItems) {
    return alignItems.indexOf(prefixClass + '-' + _GRID_TIERS.XL + '-align-items-') > -1;
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

  this.isExtraSmallColumnSizeClass = function (prefixClass, sizes) {
    return sizes.indexOf(prefixClass + '-' + _GRID_TIERS.XS + '-size-') > -1;
  };

  this.isSmallColumnSizeClass = function (prefixClass, sizes) {
    return sizes.indexOf(prefixClass + '-' + _GRID_TIERS.SM + '-size-') > -1;
  };

  this.isMediumColumnSizeClass = function (prefixClass, sizes) {
    return sizes.indexOf(prefixClass + '-' + _GRID_TIERS.MD + '-size-') > -1;
  };

  this.isLargeColumnSizeClass = function (prefixClass, sizes) {
    return sizes.indexOf(prefixClass + '-' + _GRID_TIERS.LG + '-size-') > -1;
  };

  this.isExtraLargeColumnSizeClass = function (prefixClass, sizes) {
    return sizes.indexOf(prefixClass + '-' + _GRID_TIERS.XL + '-size-') > -1;
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

  this.isExtraSmallColumnOffsetClass = function (prefixClass, offsets) {
    return offsets.indexOf(prefixClass + '-' + _GRID_TIERS.XS + '-offset-') > -1;
  };

  this.isSmallColumnOffsetClass = function (prefixClass, offsets) {
    return offsets.indexOf(prefixClass + '-' + _GRID_TIERS.SM + '-offset-') > -1;
  };

  this.isMediumColumnOffsetClass = function (prefixClass, offsets) {
    return offsets.indexOf(prefixClass + '-' + _GRID_TIERS.MD + '-offset-') > -1;
  };

  this.isLargeColumnOffsetClass = function (prefixClass, offsets) {
    return offsets.indexOf(prefixClass + '-' + _GRID_TIERS.LG + '-offset-') > -1;
  };

  this.isExtraLargeColumnOffsetClass = function (prefixClass, offsets) {
    return offsets.indexOf(prefixClass + '-' + _GRID_TIERS.XL + '-offset-') > -1;
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

  this.isExtraSmallColumnOrderClass = function (prefixClass, orders) {
    return orders.indexOf(prefixClass + '-' + _GRID_TIERS.XS + '-order-') > -1;
  };

  this.isSmallColumnOrderClass = function (prefixClass, orders) {
    return orders.indexOf(prefixClass + '-' + _GRID_TIERS.SM + '-order-') > -1;
  };

  this.isMediumColumnOrderClass = function (prefixClass, orders) {
    return orders.indexOf(prefixClass + '-' + _GRID_TIERS.MD + '-order-') > -1;
  };

  this.isLargeColumnOrderClass = function (prefixClass, orders) {
    return orders.indexOf(prefixClass + '-' + _GRID_TIERS.LG + '-order-') > -1;
  };

  this.isExtraLargeColumnOrderClass = function (prefixClass, orders) {
    return orders.indexOf(prefixClass + '-' + _GRID_TIERS.XL + '-order-') > -1;
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

  this.isExtraSmallColumnAlignSelfClass = function (prefixClass, alignSelfs) {
    return alignSelfs.indexOf(prefixClass + '-' + _GRID_TIERS.XS + '-align-self-') > -1;
  };

  this.isSmallColumnAlignSelfClass = function (prefixClass, alignSelfs) {
    return alignSelfs.indexOf(prefixClass + '-' + _GRID_TIERS.SM + '-align-self-') > -1;
  };

  this.isMediumColumnAlignSelfClass = function (prefixClass, alignSelfs) {
    return alignSelfs.indexOf(prefixClass + '-' + _GRID_TIERS.MD + '-align-self-') > -1;
  };

  this.isLargeColumnAlignSelfClass = function (prefixClass, alignSelfs) {
    return alignSelfs.indexOf(prefixClass + '-' + _GRID_TIERS.LG + '-align-self-') > -1;
  };

  this.isExtraLargeColumnAlignSelfClass = function (prefixClass, alignSelfs) {
    return alignSelfs.indexOf(prefixClass + '-' + _GRID_TIERS.XL + '-align-self-') > -1;
  };
}

module.exports = ng.core.Class(new _ngxGridService());