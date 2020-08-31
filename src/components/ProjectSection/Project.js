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
    /*boxShadow: "5px 5px 10px 2px #fff",
    "-webkit-box-shadow": "0px 0px 10px 2px #fff",
    "-moz-box-shadow": "0px 0px 10px 2px #fff",*/
    marginTop: "2vh",
    marginLeft: "1vh",
    marginRight: "1vh",
    "& h5": {
      color: "#fff",
      textShadow: "1px 1px 5px #000",
    },
    "& p": {
      color: "#111",
      fontWeight: "bold",
      textShadow: "1px 1px 5px #fff",
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
    zIndex: 30,
    position: "relative",
  },
  behindtext: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "90px",
    background: "linear-gradient(#000, transparent)",
    zIndex: 5,
  },
})

function Project({ info }) {
  const { name, link, description, Img } = info
  const isSmall = useIsSmall()
  const wrapStyle = isSmall
    ? { width: "100%", height: "30vh" }
    : { width: "400px", height: "30vh", margin: "2vh 3vw" }
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
      <div className={cls.behindtext}></div>
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
