const fs = require('fs');
const { join } = require('path');

function dirToObjectV2(path, { canAdd }) {
  return fs.readdirSync(path).reduce((accumulator, fileName) => {
    const filePath = join(path, fileName);
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
}

function dirToObjectV1({ canAdd, dirPath }) {
  return dirToObjectV2(dirPath, { canAdd });
}

function dirToObject(path, options = {}) {
  if (typeof path === 'object') {
    return dirToObjectV1(path);
  }
  return dirToObjectV2(path, options);
}

module.exports = dirToObject;
