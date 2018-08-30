# dir-to-object

> Builds an object from the files contained inside a directory.

## Installation

```bash
npm install dir-to-object
```

## Usage example

```bash
const dirToObject = require('dir-to-object');
const { join } = require('path');

const config = {
  canAdd: () => true,
  dirPath: join(__dirname, 'foo')
};

const foo = dirToObject(config);

console.log(foo);
```

Where **config** is an object with the following properties:

| name    | type                          | example                             | required or optional |
| ------- | ----------------------------- | ----------------------------------- | -------------------- |
| canAdd  | _function_: (data) => boolean | `data => data.resolve && data.type` | _optional_           |
| dirPath | _string_                      | `join(__dirname, 'foo')`            | _required_           |

## Contributing

1. [Fork it](https://github.com/mattiaerre/dir-to-object/fork)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

Distributed under the MIT license. See [LICENSE](LICENSE) for more information.
