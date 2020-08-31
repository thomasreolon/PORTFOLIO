import React from "react"
import { useIsSmall } from "../../theme"
import ScBlock from "./SchoolBlock"
import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  title: {
    marginTop: "20px",
    color: "gray",
    marginLeft: "50px",
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
})

function CvSection({ title, data }) {
  const isSmall = useIsSmall()
  const cls = useStyles()
  return (
    <>
      <Typography variant="h5" className={cls.title}>
        {title}
      </Typography>
      <div className={cls.list}>
        {data.map(info => (
          <ScBlock
            key={info.img}
            isSmall={isSmall}
            data={Object.entries(info)}
            img={info.img}
          />
        ))}
      </div>
    </>
  )
}

export default CvSection
