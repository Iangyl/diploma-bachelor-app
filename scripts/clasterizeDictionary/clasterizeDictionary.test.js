const clasterizeDictionary = require('./clasterizeDictionary');
const {
  files,
  dictionary,
  resultDict,
} = require('./clasterizeDictionary.test.config');

test('Clasterize dictionary', () => {
  const result = clasterizeDictionary(files, dictionary);
  expect(result).toEqual(resultDict);
});
