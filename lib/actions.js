'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clearModalWindows = exports.shiftModalWindow = exports.popModalWindow = exports.insertModalWindow = exports.pushModalWindow = undefined;

var _ActionTypes = require('./ActionTypes');

var pushModalWindow = exports.pushModalWindow = function pushModalWindow(type, props) {
    return {
        type: _ActionTypes.PUSH_MODAL_WINDOW,
        payload: {
            type: type,
            props: props
        }
    };
};

var insertModalWindow = exports.insertModalWindow = function insertModalWindow(type, props) {
    return {
        type: _ActionTypes.INSERT_MODAL_WINDOW,
        payload: {
            type: type,
            props: props
        }
    };
};

var popModalWindow = exports.popModalWindow = function popModalWindow(values) {
    return {
        type: _ActionTypes.POP_MODAL_WINDOW,
        payload: {
            values: values
        }
    };
};

var shiftModalWindow = exports.shiftModalWindow = function shiftModalWindow(values) {
    return {
        type: _ActionTypes.SHIFT_MODAL_WINDOW,
        payload: {
            values: values
        }
    };
};

var clearModalWindows = exports.clearModalWindows = function clearModalWindows() {
    return {
        type: _ActionTypes.CLEAR_MODAL_WINDOWS
    };
};