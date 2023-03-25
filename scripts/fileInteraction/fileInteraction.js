const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
};

const writeFile = (path, data) => {
  fs.writeFileSync(path, data, { encoding: 'utf8' });
};

const readDir = (path) => {
  const files = fs.readdirSync(path);
  return files;
};

module.exports = {
  writeFile,
  readFile,
  readDir,
};
