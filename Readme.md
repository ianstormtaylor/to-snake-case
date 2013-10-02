# to-snake-case

  Convert a string to a snake case.

## Installation

    $ component install ianstormtaylor/to-snake-case
    $ npm install to-snake-case

## Example

```js
var snake = require('to-snake-case');

snake('camelCase');  // "camel_case"
snake('space case'); // "snake_case"
snake('dot.case');   // "dot_case"
snake('weird[case'); // "weird_case"
```

## API

### toSnakeCase(string)
  
  Returns the snake-case variant of a `string`.

## License

  MIT
