function clearText(text) {
  return text.replace(/[^а-яА-Я іІїЇєЄ'-]/g, '').replace(/\s\s+/g, ' ');
}

function toLowerCase (text) {
  return text.toLowerCase();
}

function getUniqueWords(text) {
  const set = new Set(text.split(' '));
  const collection = [];

  set.forEach((item) => collection.push(item));
  return collection;
}

function createDictionary(text) {
  const clearedText = clearText(text);
  const clearedLowerCasedText = toLowerCase(clearedText)
  const uniqueWords = getUniqueWords(clearedLowerCasedText);
  const dictionary = {};

  uniqueWords.forEach((item) => (dictionary[item] = []));

  return dictionary;
}

module.exports = {
  clearText,
  toLowerCase,
  getUniqueWords,
  createDictionary
}
