import { PagesType } from "shared/types";
import { NavItem } from "./constants";

export const filterFromCurrentPage = (
  path: PagesType,
  navItems: NavItem[]
) => navItems.filter((item) => item.link !== path);
