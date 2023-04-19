const makeKMPTable = function (word: string | string[]) {
  if (typeof word === 'string') {
    word = word.split('');
  }
  let results: number[] = [];
  let pos: number = 2;
  let cnd: number = 0;

  results[0] = -1;
  results[1] = 0;
  while (pos < word.length) {
    if (word[pos - 1] == word[cnd]) {
      cnd++;
      results[pos] = cnd;
      pos++;
    } else if (cnd > 0) {
      cnd = results[cnd];
    } else {
      results[pos] = 0;
      pos++;
    }
  }
  return results;
};

const KMPSearch = function (string: string, word: string | string[]): number {
  if (typeof word === 'string') {
    word = word.split('');
  }

  let index: number = -1;
  let m: number = 0;
  let i: number = 0;
  let T: number[] = makeKMPTable(word);

  while (m + i < string.length) {
    if (word[i] == string[m + i]) {
      if (i == word.length - 1) {
        return m;
      }
      i++;
    } else {
      m = m + i - T[i];
      if (T[i] > -1) {
        i = T[i];
      } else {
        i = 0;
      }
    }
  }
  return index;
};

export default KMPSearch;
