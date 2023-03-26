import { ChangeEventHandler, CSSProperties } from 'react';

export interface ITextInput {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  style?: CSSProperties;
}
