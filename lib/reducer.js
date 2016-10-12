'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ActionTypes = require('./ActionTypes');

var initialState = {
    types: [],
    props: []
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];
    var type = action.type;
    var payload = action.payload;
    var types = state.types;
    var props = state.props;


    switch (type) {
        case _ActionTypes.PUSH_MODAL_WINDOW:
            return {
                types: types.concat(payload.type),
                props: props.concat(payload.props)
            };

        case _ActionTypes.INSERT_MODAL_WINDOW:
            return {
                types: [payload.type].concat(types),
                props: [payload.props].concat(props)
            };

        case _ActionTypes.POP_MODAL_WINDOW:
            return {
                types: types.slice(0, types.length - 1),
                props: props.slice(0, types.length - 1)
            };

        case _ActionTypes.SHIFT_MODAL_WINDOW:
            return {
                types: types.slice(1),
                props: props.slice(1)
            };

        case _ActionTypes.CLEAR_MODAL_WINDOWS:
            return initialState;

        default:
            return state;
    }
};