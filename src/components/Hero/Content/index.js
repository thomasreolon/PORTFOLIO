import React from "react"
import desc from "../../../costants/homeData"
import colors from "../../../costants/colors"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby-theme-material-ui"
import { useIsSmall } from "../../../theme"

const useStyles = makeStyles({
  container: {
    zIndex: 1000,
    position: "absolute",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  btn: {
    background: colors.emph_1,
    color: "white",
    fontWeight: 700,
    minWidth: "120px",
    margin: "0 3px",
    marginBottom: "10px",
  },
  btn__wrap: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  title: {
    textAlign: "center",
  },
})

function Content() {
  const cls = useStyles()
  const isSmall = useIsSmall()
  const containerWidth = isSmall ? "90%" : "50%"
  const top = isSmall ? "30%" : "50%"

  return (
    <div className={cls.container} style={{ width: containerWidth, top: top }}>
      <Typography variant="h2" className={cls.title}>
        {isSmall ? desc.descriptionSmall : desc.descriptionBig}
      </Typography>
      <div className={cls.btn__wrap}>
        {desc.links.map(({ name, link }) => (
          <Link to={link}>
            <Button variant="contained" className={cls.btn}>
              {name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Content
