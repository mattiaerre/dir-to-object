const fs = require('fs');
const { join } = require('path');

const fields = ({ canAdd, dirPath }) =>
  fs.readdirSync(dirPath).reduce((accumulator, fileName) => {
    const filePath = join(dirPath, fileName);
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const content = require(filePath);
    if (canAdd && canAdd(content)) {
      accumulator[fileName.replace('.js', '')] = content;
    }
    if (!canAdd) {
      accumulator[fileName.replace('.js', '')] = content;
    }
    return accumulator;
  }, {});

module.exports = fields;
