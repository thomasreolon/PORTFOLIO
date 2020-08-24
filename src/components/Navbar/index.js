import React from "react";

import cmm from "../../scripts/common";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = (props) => {
  const isSmall = cmm.useIsSmall();

  return isSmall ? <MobileNav /> : <DesktopNav />;
};

export default Navbar;
