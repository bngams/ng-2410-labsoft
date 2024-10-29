export type MenuItem = {
  title: string;
  path: string;
  // ... permissions, ...
}

export type MenuItems = MenuItem[];

export type Menu = {
  type: 'nav'| 'sidebar'
  items: MenuItems
};

