import React from "react"
import Layout from "../components/Layout"
import { Typography, makeStyles } from "@material-ui/core"
import CvSection from "../components/CvSection"
import cvData from "../costants/cvData"

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
  const cls = useStyles()
  return (
    <Layout>
      <div className={cls.white}>
        <div className={cls.wrapper}>
          <Typography variant="h3" className={cls.title}>
            Education & Working Experience
          </Typography>
          <CvSection
            title="Education & Certificates"
            data={cvData.edu}
            key="education"
          />
          <CvSection data={cvData.certificates} key="certificates" />
          <CvSection title="Working Experience" data={cvData.work} key="work" />
        </div>
      </div>
    </Layout>
  )
}

export default Cv
