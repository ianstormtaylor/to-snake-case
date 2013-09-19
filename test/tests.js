describe('to-snake-case', function () {

var assert = require('assert');
var snake = require('to-snake-case');

it('shouldnt touch snake case', function () {
  assert('a_snake_case_string' == snake('a_snake_case_string'));
});

it('should convert camel case', function () {
  assert('a_camel_case_string' == snake('aCamelCaseString'));
});

it('should convert space case', function () {
  assert('a_space_case_string' == snake('a space case string'));
});

it('should convert dot case', function () {
  assert('a_dot_case_string' == snake('a.dot.case.string'));
});

it('should convert title case', function () {
  assert('a_title_case_of_string' == snake('A Title: Case of String'));
});

it('should convert sentence case', function () {
  assert('a_sentence_case_string' == snake('A sentence case string.'));
});

it('should convert constant case', function () {
  assert('a_constant_case_string' == snake('A_CONSTANT_CASE_STRING'));
});

});