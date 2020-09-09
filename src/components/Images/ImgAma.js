import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import WhiteImg from "./WhiteImg"

const ImgAma = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "amaCL.jpg" }) {
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
        imgStyle={{
          height: "110%",
        }}
      />
    </WhiteImg>
  )
}

export default ImgAma
