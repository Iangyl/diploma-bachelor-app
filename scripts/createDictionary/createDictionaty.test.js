const {
  clearText,
  toLowerCase,
  getUniqueWords,
  createDictionary,
} = require('./createDictionary');
const {
  original,
  lowerCased,
  cleared,
  uniqueCollection,
  dictionary,
} = require('./createDictionary.test.config');

describe('process dictionary creating', () => {
  let clearedText;
  let lowerCasedClearText;
  let uniqueW;

  it('should clear text from special characters, numbers and symbols', () => {
    clearedText = clearText(original);
    expect(clearedText).toBe(cleared);
  });

  it('should make all capitalized words lowercased', () => {
    lowerCasedClearText = toLowerCase(clearedText);
    expect(lowerCasedClearText).toBe(lowerCased);
  });

  it('should return array with unique words', () => {
    uniqueW = getUniqueWords(lowerCasedClearText);
    expect(uniqueW).toEqual(uniqueCollection);
  });

  it('should return object with keys as unique words from collection', () => {
    const result = createDictionary(original);
    expect(result).toEqual(dictionary);
  });
});
