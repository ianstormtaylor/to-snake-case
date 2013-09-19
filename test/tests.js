describe('to-snake-case', function () {

var assert = require('assert');
var snake = require('to-snake-case');

it('space case', function () {
  assert('space_case' == snake('space case'));
});

it('camelCase', function () {
  assert('camel_case' == snake('camelCase'));
});

it('snake_case', function () {
  assert('snake_case' == snake('snake_case'));
});

it('dot.case', function () {
  assert('dot_case' == snake('dot.case'));
});

it('weird[case', function () {
  assert('weird_case' == snake('weird[case'));
});

it('complexCamelCase', function () {
  assert('complex_camel_case' == snake('complexCamelCase'));
});

});