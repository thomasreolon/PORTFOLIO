import React from "react"

import { useIsSmall } from "../../theme"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Navbar = props => {
  const isSmall = useIsSmall()

  return isSmall ? <MobileNav /> : <DesktopNav />
}

export default Navbar
