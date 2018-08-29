const fs = require('fs');

const fields = path =>
  fs.readdirSync(path).reduce((accumulator, current) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    accumulator[current.replace('.js', '')] = require(`${path}/${current}`);
    return accumulator;
  }, {});

module.exports = fields;
