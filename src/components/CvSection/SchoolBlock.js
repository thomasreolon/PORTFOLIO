import React from "react"
import { makeStyles, Divider } from "@material-ui/core"

const useStyles = makeStyles({
  block: {
    padding: "20px 15px",
    background: "#rgb(237,234,234)",
    boxShadow: "1px 1px 4px 1px #555",
    borderRadius: "8px",
    width: "500px",
  },
  row: {
    display: "flex",
  },
  cleft: {
    flex: "31%",
    borderRight: "1px solid lightgrey",
  },
  cright: {
    paddingLeft: "10px",
    flex: "67%",
    flexWrap: "wrap",
  },
  img: {
    width: "100%",
    overflow: "hidden",
  },
  tright: {
    color: "#555",
    fontWeight: "bold",
    fontSize: "20",
  },
  tleft: {
    color: "#111",
    fontSize: "25",
  },
})

function Block({ isSmall, title, year, mark, mainTopics, Img }) {
  const cls = useStyles()

  return (
    <div
      className={cls.block}
      style={{ margin: isSmall ? "10px 5%" : "10px 15%" }}
    >
      <div className={cls.row}>
        <div className={cls.cleft}>
          <p className={cls.tleft}>Title</p>
          <p className={cls.tleft}>Year</p>
          <p className={cls.tleft}>Final Mark</p>
          <p className={cls.tleft}>Subjects</p>
        </div>
        <div className={cls.cright}>
          <p className={cls.tright}> {title}</p>
          <p className={cls.tright}> {year}</p>
          <p className={cls.tright}> {mark}</p>
          <p className={cls.tright}>{mainTopics}</p>
        </div>
        {Img && (
          <div className={cls.img}>
            <Img />
          </div>
        )}
      </div>
    </div>
  )
}

export default Block
