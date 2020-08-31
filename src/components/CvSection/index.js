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

function CvSection({ title }) {
  const isSmall = useIsSmall()
  const cls = useStyles()
  return (
    <>
      <Typography variant="h5" className={cls.title}>
        {title}
      </Typography>
      <div className={cls.list}>
        <ScBlock
          isSmall={isSmall}
          title="High-School Diploma"
          year="2017"
          mark="100/100"
          mainTopics="economy, IT"
        />
      </div>
    </>
  )
}

export default CvSection
