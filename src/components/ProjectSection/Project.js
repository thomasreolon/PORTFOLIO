import React from "react"
import { makeStyles } from "@material-ui/core"
import { useIsSmall } from "../../theme"
import colors from "../../costants/colors"
import { Typography, Button } from "@material-ui/core"

const useStyle = makeStyles({
  wrap: {
    background: colors.emph_2,
    boxShadow: "2px 2px 5px 4px #300",
    "-webkit-box-shadow": "2px 2px 5px 4px #300",
    "-moz-box-shadow": "2px 2px 5px 4px #300",
    marginTop: "2vh",
  },
  btn: {
    background: colors.emph_3,
  },
})

function Project({ name, link, description }) {
  const isSmall = useIsSmall()
  const wrapStyle = isSmall
    ? { width: "100%", height: "40vh" }
    : { width: "500px", height: "40vh" }
  const cls = useStyle()

  return (
    <div className={cls.wrap} style={wrapStyle}>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1">{description}</Typography>
      <Button href={link} variant="contained" className={cls.btn}></Button>
    </div>
  )
}

export default Project
