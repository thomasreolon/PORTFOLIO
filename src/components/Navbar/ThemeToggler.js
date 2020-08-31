import React from "react"
import contexts from "../../contexts"
import IconButton from "@material-ui/core/IconButton"
import { RemoveRedEye as Eye } from "@material-ui/icons"

function ThemeToggler() {
  const [, dispatch] = contexts.theme.useContext()

  const toggle = () => {
    dispatch({ type: "TOGGLE_THEME" })
  }
  return (
    <IconButton onClick={toggle}>
      <Eye />
    </IconButton>
  )
}

export default ThemeToggler
