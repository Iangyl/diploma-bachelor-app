import type { NextApiRequest, NextApiResponse } from 'next';
import prepareText from '@/src/transformers/prepareText';
import findFile from '@/src/core/findFile';
import IResSearch from '@/src/interfaces/IResSearch';
import fileNamesToFileInfo from '@/src/transformers/fileNamesToFileInfo';

export type Data = {
  success: boolean;
  data?: IResSearch[];
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const searchedSubstring = req.body.search;
      const preparedSearchedSubstring = prepareText(searchedSubstring);
      const searchedWords = preparedSearchedSubstring.split(' ');
      const fileNames = findFile(searchedWords, searchedSubstring);
      const fileInfos = fileNamesToFileInfo(fileNames);

      if (fileNames && fileNames.length > 0) {
        res.statusCode = 200;
        res.send({
          success: true,
          data: fileInfos,
        });
      } else {
        res.statusCode = 404;
        res.send({ success: false, error: 'Вказаного підрядка не знайдено в жодному файлі!' });
      }
    } catch {
      res.statusCode = 500;
      res.send({ success: false, error: 'Упс! Щось пішло не так...' });
    }
  }
}
