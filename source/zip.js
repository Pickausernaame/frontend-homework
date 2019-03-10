'use strict';

/**
 * This function takes several objects and returns one.
 * If there are duplicate properties, the data is overwritten.
 * But if there is no such property, then a new property is created.
 * @param {...object} args - Objects to be archived
 * @example
 * // returns {}
 * zip({}, {});
 * @example
 * // returns {age: 3, name: Boris}
 * zip({age: 3}, {name: Boris})
 * @returns {Object} Returns the object.
 */


const zip = (...args) => args.reduce((res, cur) => {
    return (typeof cur === "object") ? Object.assign(cur, res) : {}
    }, {});
