# to-snake-case

  Convert a non-snake-case string to a snake-case string.

## Installation

    $ component install ianstormtaylor/to-snake-case

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
