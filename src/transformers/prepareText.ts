import { clearText, toLowerCase } from '../utils/helpers';

const prepareText = (value: string) => clearText(toLowerCase(value));

export default prepareText;
