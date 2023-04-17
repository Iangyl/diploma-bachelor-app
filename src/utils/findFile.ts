import KMPSearch from '../../scripts/KMP/KMPSearch';
import getFile from './getFile';

const DIRECTORY_WITH_DICTIONARY = './src/assets/dictionaries';

const findFile = (wordsArray: string[], substring: string) => {
  let wordsInfo: Record<string, string[]> = {};
  let filesCounter: Record<string, number> = {};
  let filesArray: string[] = [];

  const filesList: Record<string, string | number>[] = [];

  const dictionary = JSON.parse(
    getFile(`${DIRECTORY_WITH_DICTIONARY}/indexedDictionary.json`)
  );

  wordsArray.forEach((word: string) => {
    wordsInfo = { ...wordsInfo, [word]: dictionary[word] };
  });

  Object.keys(wordsInfo).forEach((key: string) => {
    filesArray = [...filesArray, ...wordsInfo[key]];
  });

  filesArray.forEach((fileName: string) => {
    filesCounter[fileName] = 0;
  });

  Object.keys(wordsInfo).forEach((key: string) => {
    wordsInfo[key].forEach((fileName: string) => {
      if (filesCounter[fileName]) filesCounter[fileName]++;
    });
  });

  Object.keys(filesCounter).forEach((key: string) => {
    filesList.push({ name: key, count: filesCounter[key] });
  });

  filesList.sort((a, b) => +a.count - +b.count);

  filesList.forEach((item) => {
    const name = item.name as string;
    const text = getFile(name);
    const idx = KMPSearch(text, substring);

    if (idx >= 0) {
      return name;
    }
  });

  return undefined;
};

export default findFile;
