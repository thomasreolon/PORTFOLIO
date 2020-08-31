import React from "react"
import { useIsSmall } from "../../theme"
import { makeStyles } from "@material-ui/core"
import { ImgHero, ImgRobot } from "../Images"
import Sphere from "./Sphere"
import Content from "./Content"

const useStyles = makeStyles({
  wrapper: {
    overflow: "hidden",
    position: "relative",
    height: "100vh",
    width: "100%",
    "& .gatsby-image-wrapper": {
      height: "100%",
    },
  },
  ".image picture img": {
    minHeight: "100vh !important",
    width: "100%",
    objectFit: "contain",
  },
  image__dark: {
    position: "absolute",
    top: 0,
    zIndex: 3,
    width: "100vw",
    height: "100vh",
  },
  robot: {
    position: "absolute",
    top: "60%",
    zIndex: 50,
  },
  nextSec: {
    position: "absolute",
    top: "100%",
    transform: "translateY(-100%)",
    width: "100%",
    height: "5vh",
    background:
      "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(96,96,96,0) 100%);",
  },
})

function Hero() {
  const isSmall = useIsSmall()
  const classes = useStyles()

  const darkness = isSmall ? "0.8" : "0.92"
  return (
    <div className={classes.wrapper}>
      <Content />
      <div
        className={classes.image__dark}
        style={{ background: `rgba(0, 0, 0, ${darkness})` }}
      ></div>

      {isSmall && <ImgRobot />}
      {<ImgHero className={classes.image} style={{ minHeight: "100%" }} />}
      {!isSmall && <Sphere />}

      <div className={classes.nextSec}></div>
    </div>
  )
}

export default Hero
