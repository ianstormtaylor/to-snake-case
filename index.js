
var toSpace = require('to-space-case');


/**
 * Expose `toSnakeCase`.
 */

module.exports = toSnakeCase;


/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */


function toSnakeCase (string) {
  return toSpace(string).replace(' ', '_');
}