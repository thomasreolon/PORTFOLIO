import React from "react"
import { IconButton, makeStyles } from "@material-ui/core"
import { ImageSearch, SubdirectoryArrowRight } from "@material-ui/icons"

const useStyles = makeStyles({
  icn: {
    color: "#283",
  },
  btn: {
    padding: 0,
    marginRight: "10px",
  },
})

function LinkImage({ to }) {
  const link = `/image?name=${to}`
  const cls = useStyles()
  return (
    <IconButton
      className={cls.btn}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <ImageSearch className={cls.icn} />{" "}
      <SubdirectoryArrowRight className={cls.icn} />
    </IconButton>
  )
}

export default LinkImage
