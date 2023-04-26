import { MouseEventHandler } from "react";

export type IPaginationItemType = 'leftArrow' | 'rightArrow' | 'cell'

export interface IPaginationItem {
  type: IPaginationItemType;
  value?: number | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
