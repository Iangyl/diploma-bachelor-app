import { MouseEventHandler } from "react";

export type IPaginationItemType = 'leftArrow' | 'rightArrow' | 'cell'

export interface IPaginationItem {
  className?: string;
  disabled?: boolean;
  value?: number | string;
  type: IPaginationItemType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
