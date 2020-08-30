import React from "react"
import { makeStyles } from "@material-ui/core"
import { useIsSmall } from "../../theme"
import colors from "../../costants/colors"
import { Typography, Button } from "@material-ui/core"

const useStyle = makeStyles({
  wrap: {
    overflow: "hidden",
    position: "relative",
    background: "#fff",
    borderRadius: "2%",
    padding: "10px",
    boxShadow: "5px 5px 10px 2px #fff",
    "-webkit-box-shadow": "0px 0px 10px 2px #fff",
    "-moz-box-shadow": "0px 0px 10px 2px #fff",
    marginTop: "2vh",
    marginLeft: "1vh",
    marginRight: "1vh",
    "& h5": {
      color: colors.light.text,
    },
    "& p": {
      color: colors.dark.bg_2,
    },
  },
  btn: {
    background: colors.emph_3,
    color: "#fff",
    position: "absolute",
    bottom: "10px",
    zIndex: 30,
  },
  up: {
    zIndex: 9999,
  },
})

function Project({ info }) {
  const { name, link, description, Img } = info
  const isSmall = useIsSmall()
  const wrapStyle = isSmall
    ? { width: "100%", height: "40vh" }
    : { width: "400px", height: "30vh" }
  const cls = useStyle()

  return (
    <div className={cls.wrap} style={wrapStyle}>
      <Img />
      <Typography className={cls.up} variant="h5">
        {name}
      </Typography>
      <Typography className={cls.up} variant="body1">
        {description}
      </Typography>
      <Button
        href={link}
        target="_blank"
        rel="noreferrer"
        variant="contained"
        className={cls.btn}
      >
        GO TO THE PROJECT
      </Button>
    </div>
  )
}

export default Project
