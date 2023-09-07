import React from "react";
import { useMedia } from "shared/hooks";
import NavDesktop from "./NavDesktop/NavDesktop";
import NavMobile from "./NavMobile/NavMobile";

const Nav = () => {
  const { isMD } = useMedia();

  return <>{isMD ? <NavDesktop /> : <NavMobile />}</>;
};

export default Nav;
