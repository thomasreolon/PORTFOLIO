import React from "react"
import { makeStyles } from "@material-ui/core"
import LinkImage from "./LinkImage"

const useStyles = makeStyles({
  block: {
    padding: "15px 5px 10px 20px",
    background: "#rgb(237,234,234)",
    boxShadow: "1px 1px 4px 1px #555",
    borderRadius: "8px",
    maxWidth: "650px",
    display: "flex",
    justifyContent: "space-between",
    minHeight: "130px",
  },
  table: {
    borderCollapse: "collapse",
  },
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "hidden",
  },
  tleft: {
    textTransform: "capitalize",
    color: "#111",
    fontSize: "25",
    borderRight: "1px solid lightgray",
    paddingRight: "10px",
  },
  tright: {
    color: "#555",
    fontWeight: "bold",
    fontSize: "20",
    paddingLeft: "10px",
  },
})

function Block({ isSmall, data, img }) {
  const cls = useStyles()

  return (
    <div
      className={cls.block}
      key={img}
      style={{
        margin: isSmall ? "10px" : "15px",
        minWidth: isSmall ? "95vw" : "450px",
      }}
    >
      <table className={cls.table}>
        <tbody>
          {data.map(([name, value]) =>
            name === "img" ? null : (
              <tr key={name}>
                <td className={cls.tleft}>{name}</td>
                <td className={cls.tright}>{value}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      {img && <LinkImage to={img} />}
    </div>
  )
}

export default Block
