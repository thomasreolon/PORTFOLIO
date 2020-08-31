import React from "react"
import Layout from "../components/Layout"
import { Typography, makeStyles } from "@material-ui/core"
import CvSection from "../components/CvSection"
import { useIsSmall } from "../theme"

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  white: {
    background: "white",
    color: "#333",
    minHeight: "90vh",
  },
  wrapper: {
    marginLeft: "auto",
    marginRight: "auto",
  },
})

function Cv() {
  const isSmall = useIsSmall()
  const cls = useStyles()
  return (
    <Layout>
      <div className={cls.white}>
        <div className={cls.wrapper} style={{ width: isSmall ? "90%" : "60%" }}>
          <Typography variant="h3" className={cls.title}>
            Education & Working Experience
          </Typography>
          <CvSection title="Education & Certificates" />
        </div>
      </div>
    </Layout>
  )
}

export default Cv
