import React from "react"
import { useIsSmall } from "../../theme"
import { makeStyles } from "@material-ui/core"
import { IMGHero } from "../Images"

const useStyles = makeStyles({
  wrapper: {
    height: "100%",
    width: "100%",
    background: "#a33",
  },
  image: {
    height: "100vh",
    width: "100%",
    zIndex: "-5 !important",
    "& *": {
      zIndex: "-5 !important",
      "& *": {
        zIndex: -5,
      },
    },
  },
})

function Hero({}) {
  const isSmall = useIsSmall()
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <IMGHero className={classes.image} />
    </div>
  )
}

export default Hero
