import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import WhiteImg from "./WhiteImg"

const ImgNet = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "netCL.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <WhiteImg>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="100% 50%"
      />
    </WhiteImg>
  )
}

export default ImgNet
