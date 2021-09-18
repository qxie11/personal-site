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
