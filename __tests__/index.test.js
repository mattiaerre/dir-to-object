const { join } = require('path');
const dirToObject = require('../src');

describe('dirToObject', () => {
  it('to match snapshot', () => {
    expect(dirToObject(join(__dirname, '../__mocks__/foo'))).toMatchSnapshot();
  });
});
