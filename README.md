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

const foo = dirToObject(join(__dirname, 'foo'));

console.log(foo);
```

## Contributing

1. Fork it (<https://github.com/mattiaerre/dir-to-object/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

Distributed under the MIT license. See [LICENSE](LICENSE) for more information.
