import { MouseEventHandler } from 'react';

export interface IButton {
  type?: 'submit' | 'button' | 'reset';
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: JSX.Element | JSX.Element[] | string;
  style?: Record<string, string | number>;
}
