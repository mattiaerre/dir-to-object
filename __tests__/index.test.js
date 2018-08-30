const { join } = require('path');
const dirToObject = require('../src');

describe('dirToObject', () => {
  const scenarios = [
    {
      config: { dirPath: join(__dirname, '../__mocks__/foo') },
      description: 'config w/ dirPath only'
    },
    {
      config: {
        canAdd: data => data.resolve && data.type,
        dirPath: join(__dirname, '../__mocks__/foo')
      },
      description: 'config w/ canAdd and dirPath'
    }
  ];

  scenarios.forEach(({ config, description }) => {
    it(description, () => {
      expect(dirToObject(config)).toMatchSnapshot();
    });
  });
});
