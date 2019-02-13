'use strict';

/**
 * This function takes several objects and returns one.
 * If there are duplicate properties, the data is overwritten.
 * But if there is no such property, then a new property is created.
 * @example
 * // returns {}
 * zip({}, {});
 * @example
 * // returns {age: 3, name: Boris}
 * zip({age: 3}, {name: Boris})
 * @example
 * // returns 'Type error'
 * zip('age', {name: Boris})
 * @example
 * // returns {}
 * zip()
 * @returns {Object} Returns the object.
 */


const zip = (...args) => {
    args = [].slice.call(args);
    if (args.length === 0) {
        return {};
    }
    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] != 'object') {
            return "Type error";
        }
    }
    return Object.assign(...args.reverse());
};