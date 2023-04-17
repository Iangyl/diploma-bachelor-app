import fs from 'fs';

const DIRECTORY_WITH_FILES = './src/assets/files';

export default function (fileName: string) {
  return fs.readFileSync(`${DIRECTORY_WITH_FILES}/${fileName}`, {
    encoding: 'utf8',
  });
}
