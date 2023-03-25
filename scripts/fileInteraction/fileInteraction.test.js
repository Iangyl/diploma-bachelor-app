const fs = require('fs');
const { writeFile, readDir, readFile } = require('./fileInteraction');

describe('interaction with files', () => {
  const PATH_TO_FILE =
    'D:/Lenovo/IT/My Projects/diploma/app/src/assets/files/зоровий_нерв.txt';

  it('should read the file in utf8', () => {
    const result = readFile(PATH_TO_FILE);

    expect(result.includes('і')).toBe(true);
  });

  it('should write the file', () => {
    const text = 'some text';
    writeFile('./scripts/fileInteraction/mock.txt', text);

    expect(fs.existsSync('./scripts/fileInteraction/mock.txt')).toBe(true);
    expect(
      fs.readFileSync('./scripts/fileInteraction/mock.txt', {
        encoding: 'utf8',
      })
    ).toBe('some text');
  });

  it('should read directory on files and folders', () => {
    const files = readDir('./scripts/fileInteraction');

    expect(files).toEqual([
      'fileInteraction.js',
      'fileInteraction.test.js',
      'mock.txt',
    ]);
  });
});
