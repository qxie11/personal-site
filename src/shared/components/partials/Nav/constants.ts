import { PAGES } from "shared/constants";

export type NavItem = {
  text: string;
  link: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    text: "главная",
    link: PAGES.HOME,
  },
  {
    text: "обо мне",
    link: PAGES.ABOUT,
  },
  {
    text: "менторство",
    link: PAGES.CONSULT,
  },
  {
    text: "работы",
    link: "/#works",
  },
];
