import { Type } from '@angular/core';

export type MenuItemModel = {
  id: number;
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItemModel[];
  //   component?: Type<unknown>;
  loadComponent?: () => Promise<any>;
};
