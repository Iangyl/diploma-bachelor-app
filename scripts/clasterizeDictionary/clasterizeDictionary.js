function clasterizeDictionary(files, dictionary) {
  const newDict = dictionary;

  files.forEach(file => {
    for (const secondaryKey in dictionary) {
      newDict[secondaryKey] = file.clearedText.includes(secondaryKey)
        ? [...newDict[secondaryKey], file.filename]
        : newDict[secondaryKey];
    }
  })

  return newDict;
}

module.exports = clasterizeDictionary;
