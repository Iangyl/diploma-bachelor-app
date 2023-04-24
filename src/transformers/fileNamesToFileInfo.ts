import getFile from '../utils/getFile';
import { DIRECTORY_WITH_DOCS } from '../utils/constants';

export default (fileNames: string[]) =>
  fileNames.map((file) => {
    return { fileName: file, content: getFile(DIRECTORY_WITH_DOCS, file) };
  });
