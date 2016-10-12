'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ActionTypes = require('./ActionTypes');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function () {
    return function (next) {
        var _actionsHandlers;

        var resolveFunctions = [];
        var actionsHandlers = (_actionsHandlers = {}, _defineProperty(_actionsHandlers, _ActionTypes.PUSH_MODAL_WINDOW, function () {
            return new Promise(function (resolve) {
                return resolveFunctions.push(resolve);
            });
        }), _defineProperty(_actionsHandlers, _ActionTypes.INSERT_MODAL_WINDOW, function () {
            return new Promise(function (resolve) {
                return resolveFunctions.unshift(resolve);
            });
        }), _defineProperty(_actionsHandlers, _ActionTypes.POP_MODAL_WINDOW, function (action) {
            var values = action.payload && action.payload.values;
            var resolve = resolveFunctions.pop();

            if (typeof resolve !== 'function') return;

            resolve(values);
        }), _defineProperty(_actionsHandlers, _ActionTypes.SHIFT_MODAL_WINDOW, function (action) {
            var values = action.payload && action.payload.values;
            var resolve = resolveFunctions.shift();

            if (typeof resolve !== 'function') return;

            resolve(values);
        }), _defineProperty(_actionsHandlers, _ActionTypes.CLEAR_MODAL_WINDOWS, function () {
            resolveFunctions.forEach(function (resolve) {
                return resolve();
            });
            resolveFunctions.splice(0, resolveFunctions.length);
        }), _actionsHandlers);

        return function (action) {
            var handler = actionsHandlers[action.type];

            if (typeof handler !== 'function') {
                return next(action);
            }

            next(action);
            return handler(action);
        };
    };
};