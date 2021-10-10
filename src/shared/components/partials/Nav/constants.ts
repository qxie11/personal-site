export type NavItem = {
  text: string;
  link: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    text: 'обо мне',
    link: '/about',
  },
  {
    text: 'менторство',
    link: '/consult',
  },
  {
    text: 'работы',
    link: '#works',
  },
];

export const NAV_ITEMS_WITH_HOME: NavItem[] = [
  {
    text: 'главная',
    link: '/',
  },
  ...NAV_ITEMS,
];
