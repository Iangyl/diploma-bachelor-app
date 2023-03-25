const { createDictionary, toLowerCase, clearText } = require('./createDictionary/createDictionary');
const {
  readDir,
  writeFile,
  readFile,
} = require('./fileInteraction/fileInteraction');
const clasterizeDictionary = require('./clasterizeDictionary/clasterizeDictionary');

const DIRECTORY_WITH_FILES = './src/assets/files';
const DIRECTORY_WITH_DICTIONARY = './src/assets/dictionary';

function preparingData() {
  const files = readDir(DIRECTORY_WITH_FILES);
  const filesWithText = [];
  let text = '';

  files.forEach((item) => {
    const textFromFile = readFile(DIRECTORY_WITH_FILES + '/' + item) + ' ';
    text += textFromFile;
    const trimmedText = textFromFile.trimEnd();
    const fileInfo = {
      filename: item,
      originalText: trimmedText,
      clearedText: toLowerCase(clearText(trimmedText))
    }
    filesWithText.push(fileInfo);
  });

  const dictionary = createDictionary(text);

  const clasterizeDict = clasterizeDictionary(filesWithText, dictionary);

  writeFile(
    DIRECTORY_WITH_DICTIONARY + '/' + 'indexedDictionary.json',
    JSON.stringify(clasterizeDict)
  );
}

preparingData();

module.exports = preparingData;
