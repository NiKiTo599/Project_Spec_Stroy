import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ControlledCarousel from "../components/mainPage/Courusel";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ControlledCarousel />
  </Layout>
)

export default IndexPage
