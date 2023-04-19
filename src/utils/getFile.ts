import fs from 'fs';

export default function (path: string, fileName: string) {
  return fs.readFileSync(`${path}\\${fileName}`, {
    encoding: 'utf8',
  });
}
