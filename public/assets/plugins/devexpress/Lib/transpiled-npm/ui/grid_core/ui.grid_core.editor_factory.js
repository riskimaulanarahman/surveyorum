"use strict";

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../../core/renderer"));

var _dom_adapter = _interopRequireDefault(require("../../core/dom_adapter"));

var _events_engine = _interopRequireDefault(require("../../events/core/events_engine"));

var _uiGrid_core = _interopRequireDefault(require("./ui.grid_core.modules"));

var _click = require("../../events/click");

var _pointer = _interopRequireDefault(require("../../events/pointer"));

var _position = _interopRequireDefault(require("../../animation/position"));

var _index = require("../../events/utils/index");

var _browser = _interopRequireDefault(require("../../core/utils/browser"));

var _extend = require("../../core/utils/extend");

var _position2 = require("../../core/utils/position");

var _ui = _interopRequireDefault(require("../shared/ui.editor_factory_mixin"));

var _uiGrid_core2 = _interopRequireDefault(require("./ui.grid_core.utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EDITOR_INLINE_BLOCK = 'dx-editor-inline-block';
var CELL_FOCUS_DISABLED_CLASS = 'dx-cell-focus-disabled';
var FOCUS_OVERLAY_CLASS = 'focus-overlay';
var CONTENT_CLASS = 'content';
var FOCUSED_ELEMENT_CLASS = 'dx-focused';
var ROW_CLASS = 'dx-row';
var MODULE_NAMESPACE = 'dxDataGridEditorFactory';
var UPDATE_FOCUS_EVENTS = (0, _index.addNamespace)([_pointer.default.down, 'focusin', _click.name].join(' '), MODULE_NAMESPACE);
var DX_HIDDEN = 'dx-hidden';

var EditorFactory = _uiGrid_core.default.ViewController.inherit({
  _getFocusedElement: function _getFocusedElement($dataGridElement) {
    var rowSelector = this.option('focusedRowEnabled') ? 'tr[tabindex]:focus' : 'tr[tabindex]:not(.dx-data-row):focus';
    var focusedElementSelector = "td[tabindex]:focus, ".concat(rowSelector, ", input:focus, textarea:focus, .dx-lookup-field:focus, .dx-checkbox:focus, .dx-switch:focus, .dx-dropdownbutton:focus"); // T181706

    return $dataGridElement.find(focusedElementSelector);
  },
  _getFocusCellSelector: function _getFocusCellSelector() {
    return '.dx-row > td';
  },
  _updateFocusCore: function _updateFocusCore() {
    var $focus = this._$focusedElement;
    var $dataGridElement = this.component && this.component.$element();
    var $focusCell;
    var hideBorders;

    if ($dataGridElement) {
      // this selector is specific to IE
      $focus = this._getFocusedElement($dataGridElement);

      if ($focus.length) {
        if (!$focus.hasClass(CELL_FOCUS_DISABLED_CLASS) && !$focus.hasClass(ROW_CLASS)) {
          $focusCell = $focus.closest(this._getFocusCellSelector() + ', .' + CELL_FOCUS_DISABLED_CLASS);
          hideBorders = $focusCell.get(0) !== $focus.get(0) && $focusCell.hasClass(EDITOR_INLINE_BLOCK);
          $focus = $focusCell;
        }

        if ($focus.length && !$focus.hasClass(CELL_FOCUS_DISABLED_CLASS)) {
          this.focus($focus, hideBorders);
          return;
        }
      }
    }

    this.loseFocus();
  },
  _updateFocus: function _updateFocus(e) {
    var that = this;
    var isFocusOverlay = e && e.event && (0, _renderer.default)(e.event.target).hasClass(that.addWidgetPrefix(FOCUS_OVERLAY_CLASS));
    that._isFocusOverlay = that._isFocusOverlay || isFocusOverlay;
    clearTimeout(that._updateFocusTimeoutID);
    that._updateFocusTimeoutID = setTimeout(function () {
      delete that._updateFocusTimeoutID;

      if (!that._isFocusOverlay) {
        that._updateFocusCore();
      }

      that._isFocusOverlay = false;
    });
  },
  _updateFocusOverlaySize: function _updateFocusOverlaySize($element, position) {
    $element.hide();

    var location = _position.default.calculate($element, (0, _extend.extend)({
      collision: 'fit'
    }, position));

    if (location.h.oversize > 0) {
      $element.outerWidth($element.outerWidth() - location.h.oversize);
    }

    if (location.v.oversize > 0) {
      $element.outerHeight($element.outerHeight() - location.v.oversize);
    }

    $element.show();
  },
  callbackNames: function callbackNames() {
    return ['focused'];
  },
  focus: function focus($element, hideBorder) {
    var that = this;

    if ($element === undefined) {
      return that._$focusedElement;
    } else if ($element) {
      // To prevent overlay flicking
      if (!$element.is(that._$focusedElement)) {
        // TODO: this code should be before timeout else focus is not will move to adaptive form by shift + tab key
        that._$focusedElement && that._$focusedElement.removeClass(FOCUSED_ELEMENT_CLASS);
      }

      that._$focusedElement = $element;
      clearTimeout(that._focusTimeoutID);
      that._focusTimeoutID = setTimeout(function () {
        delete that._focusTimeoutID;
        that.renderFocusOverlay($element, hideBorder);
        $element.addClass(FOCUSED_ELEMENT_CLASS);
        that.focused.fire($element);
      });
    }
  },
  refocus: function refocus() {
    var $focus = this.focus();
    this.focus($focus);
  },
  renderFocusOverlay: function renderFocusOverlay($element, hideBorder) {
    var that = this;

    if (!_uiGrid_core2.default.isElementInCurrentGrid(this, $element)) {
      return;
    }

    if (!that._$focusOverlay) {
      that._$focusOverlay = (0, _renderer.default)('<div>').addClass(that.addWidgetPrefix(FOCUS_OVERLAY_CLASS));
    }

    if (hideBorder) {
      that._$focusOverlay.addClass(DX_HIDDEN);
    } else if ($element.length) {
      // align "left bottom" for IE, align "right bottom" for Mozilla
      var align = _browser.default.msie ? 'left bottom' : _browser.default.mozilla ? 'right bottom' : 'left top';
      var $content = $element.closest('.' + that.addWidgetPrefix(CONTENT_CLASS));
      var elemCoord = (0, _position2.getBoundingRect)($element.get(0));

      that._$focusOverlay.removeClass(DX_HIDDEN).appendTo($content).outerWidth(elemCoord.right - elemCoord.left + 1).outerHeight(elemCoord.bottom - elemCoord.top + 1);

      var focusOverlayPosition = {
        precise: true,
        my: align,
        at: align,
        of: $element,
        boundary: $content.length && $content
      };

      that._updateFocusOverlaySize(that._$focusOverlay, focusOverlayPosition);

      _position.default.setup(that._$focusOverlay, focusOverlayPosition);

      that._$focusOverlay.css('visibility', 'visible'); // for ios

    }
  },
  resize: function resize() {
    var $focusedElement = this._$focusedElement;

    if ($focusedElement) {
      this.focus($focusedElement);
    }
  },
  loseFocus: function loseFocus() {
    this._$focusedElement && this._$focusedElement.removeClass(FOCUSED_ELEMENT_CLASS);
    this._$focusedElement = null;
    this._$focusOverlay && this._$focusOverlay.addClass(DX_HIDDEN);
  },
  init: function init() {
    this.createAction('onEditorPreparing', {
      excludeValidators: ['disabled', 'readOnly'],
      category: 'rendering'
    });
    this.createAction('onEditorPrepared', {
      excludeValidators: ['disabled', 'readOnly'],
      category: 'rendering'
    });
    this._updateFocusHandler = this._updateFocusHandler || this.createAction(this._updateFocus.bind(this));

    _events_engine.default.on(_dom_adapter.default.getDocument(), UPDATE_FOCUS_EVENTS, this._updateFocusHandler);

    this._attachContainerEventHandlers();
  },
  _attachContainerEventHandlers: function _attachContainerEventHandlers() {
    var that = this;
    var $container = that.component && that.component.$element();

    if ($container) {
      // T179518
      _events_engine.default.on($container, (0, _index.addNamespace)('keydown', MODULE_NAMESPACE), function (e) {
        if ((0, _index.normalizeKeyName)(e) === 'tab') {
          that._updateFocusHandler(e);
        }
      });
    }
  },
  dispose: function dispose() {
    clearTimeout(this._focusTimeoutID);
    clearTimeout(this._updateFocusTimeoutID);

    _events_engine.default.off(_dom_adapter.default.getDocument(), UPDATE_FOCUS_EVENTS, this._updateFocusHandler);
  }
}).include(_ui.default);

var _default = {
  defaultOptions: function defaultOptions() {
    return {};
  },
  controllers: {
    editorFactory: EditorFactory
  }
};
exports.default = _default;
module.exports = exports.default;