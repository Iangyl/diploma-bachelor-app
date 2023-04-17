import {
  clearText,
  toLowerCase,
} from '../../scripts/createDictionary/createDictionary';

const prepareText = (value: string) => clearText(toLowerCase(value));

export default prepareText;
