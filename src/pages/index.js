import React from "react"
import { projects } from "../costants/projects"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import ProjectSection from "../components/ProjectSection"

const proj = Object.values(projects)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    ihhhhhhh-----
    <ProjectSection
      title="Frontend"
      icons={[]}
      projects={proj}
      tag="frontend"
    />
    ihhhhjdajsdgashhh-----
  </Layout>
)

export default IndexPage
