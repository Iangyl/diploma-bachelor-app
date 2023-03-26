import { ChangeEventHandler, CSSProperties, MouseEventHandler } from 'react';

export interface IMainSearch {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
}
