import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import { useIsDark } from "../../theme"
import homeData from "../../costants/homeData"

const useStyles = makeStyles({
  container: {
    borderRadius: "4px",
    margin: "0 auto",
    padding: "10px",
    width: "450px",
    marginBottom: "20px",
  },
  title: {
    textAlign: "center",
  },
  flex: {
    display: "flex",
  },
})

function Contact() {
  const cls = useStyles()
  const isDark = useIsDark()

  return (
    <div
      className={cls.container}
      style={{
        boxShadow: isDark ? "1px 1px 6px 1px #fff" : "1px 1px 6px 1px #111",
      }}
      id="contact"
    >
      <Typography className={cls.title} variant="h4">
        Contact
      </Typography>
      <Typography>email: thomas.reolon.it@gmail.com</Typography>
      <div className={cls.flex}>
        <Typography>socials:</Typography>
        {homeData.extLinks.map(({ link, Icon }) => (
          <a key={link} href={link} target="_blank" rel="noreferrer">
            <Icon />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contact
