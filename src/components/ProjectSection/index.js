import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import Project from "./Project"

const useStyles = makeStyles({
  wrap: {
    background: "#000",
    width: "100%",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  centerer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  projWrap: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
})

function ProjectSection({ title, icons, projects, tag, id }) {
  const cls = useStyles()

  return (
    <div id={id} className={cls.wrap}>
      <div className={cls.centerer}>
        <Typography variant="h4">{title}</Typography>
        <div className={cls.icons}>
          {icons.map(Icon => (
            <Icon />
          ))}
        </div>
        <div className={cls.projWrap}>
          {projects.map(pr => {
            if (pr.tags.indexOf(tag) >= 0)
              return <Project info={pr} key={pr.name} />
            else return <></>
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
