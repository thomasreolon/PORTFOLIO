import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import { useIsSmall } from "../../theme"
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
  },
  projWrap: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
})

function ProjectSection({ title, icons, projects, tag }) {
  const isSmall = useIsSmall()
  const cls = useStyles()

  return (
    <div className={cls.wrap}>
      <div className={cls.centerer} style={{ width: isSmall ? "90%" : "70%" }}>
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
