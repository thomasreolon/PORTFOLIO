import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import socials from "../../costants/homeData"
import makeStyles from "@material-ui/core/styles/makeStyles"
import IconButton from "@material-ui/core/IconButton"

const styles = makeStyles({
  root: {
    position: "absolute",
    zIndex: "9999",
    top: "55%",
    right: "2%",
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    marginTop: "1vh",
    "&:hover": {
      background: "rgba(240,230,230,0.1)",
    },
  },
})

const Socials = ({ socials }) => {
  const cls = styles()

  return (
    <div className={cls.root}>
      {socials.map(({ link, Icon }) => (
        <a href={link} target="_blank" rel="noreferrer">
          <IconButton className={cls.icon}>
            <Icon />
          </IconButton>
        </a>
      ))}
    </div>
  )
}

const ImgRobot = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "herorobot.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const style = {
    position: "absolute",
    width: "100%",
    height: "30%",
    top: "90%",
    transform: "translateY(-100%)",
    zIndex: "1000",
  }

  return (
    <>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        imgStyle={{ width: "100%" }}
        style={style}
      />
      <Socials socials={socials.extLinks} />
    </>
  )
}

export default ImgRobot
