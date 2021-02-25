import React from "react"
import Intro from "../components/intro/intro"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Projects from "../components/Projects/Projects"
import Test from "../components/test-carousel/slickTest"


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    {/* <Projects /> */}
    <Test />
  </Layout>
)

export default IndexPage
