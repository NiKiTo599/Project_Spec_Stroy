import React from "react"
import Alert from 'react-bootstrap'
import { Link } from "gatsby"
import '../components/jqueryAnimation'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ControlledCarousel from "../components/mainPage/Courusel";
import AboutCompany from "../components/mainPage/AboutCompany";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ControlledCarousel />
    <AboutCompany />
  </Layout>
)

export default IndexPage
