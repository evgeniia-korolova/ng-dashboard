

export type MenuItemModel = {
  id: number;
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItemModel[];
  //   component?: Type<unknown>;
  loadComponent?: () => Promise<any>;
  hidden?: boolean;
  redirectToFirstChild?: boolean;
};
