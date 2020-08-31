import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles({
  wrap: {
    position: "relative",
    height: "100%",
    "& .gatsby-image-wrapper": {
      zIndex: 1,
      height: "100%",
    },
  },
  white: {
    zIndex: 20,
    position: "absolute",
    width: "100%",
    minHeight: "100%",
    background:
      "radial-gradient(circle, rgba(96,96,96,0) 0%, rgba(255,255,255,0.9) 60%)",
  },
  abs: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "1 !important",
    top: 0,
    left: 0,
  },
})

function WhiteImg({ children }) {
  const cls = useStyle()
  return (
    <div className={cls.abs}>
      <div className={cls.wrap}>
        <div className={cls.white}></div>

        {children}
      </div>
    </div>
  )
}

export default WhiteImg
