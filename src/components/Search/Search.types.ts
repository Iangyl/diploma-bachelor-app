import { ChangeEventHandler, CSSProperties, FormEventHandler } from 'react';

export interface IMainSearch {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  className?: string;
  style?: CSSProperties;
}
