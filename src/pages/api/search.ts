// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prepareText from '@/src/transformers/prepareText';
import findFile from '@/src/core/findFile';
import getFile from '@/src/utils/getFile';
import { DIRECTORY_WITH_DOCS } from '@/src/utils/constants';
import IResSearch from '@/src/interfaces/IResSearch';

export type Data = {
  success: boolean;
  data?: IResSearch;
  error?: string;
};

// move all calculation to next project instead of using Express

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('server');
  if (req.method === 'POST') {
    const searchedSubstring = req.body.search;
    const preparedSearchedSubstring = prepareText(searchedSubstring);
    const searchedWords = preparedSearchedSubstring.split(' ');
    const fileName = findFile(searchedWords, searchedSubstring);

    if (fileName) {
      res.statusCode = 200;
      res.send({
        success: true,
        data: {
          fileName: fileName,
          content: getFile(DIRECTORY_WITH_DOCS, fileName),
        },
      });
    } else {
      res.statusCode = 404;
      res.send({ success: false, error: 'No such substring in any file' });
    }
  }
}
