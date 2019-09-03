import React from "react"
import Alert from "react-bootstrap"
import { Link } from "gatsby"
import $ from "jquery"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ControlledCarousel from "../components/mainPage/Courusel"
import AboutCompany from "../components/mainPage/AboutCompany"
import Trubi from "../components/mainPage/Trybi"

class IndexPage extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $("body").css("display", "none")

      $("body").fadeIn(2000)

      $("a.transition").click(function(event) {
        event.preventDefault()
        const linkLocation = this.href
        $("body").fadeOut(1000, redirectPage.bind(this, linkLocation))
      })

      function redirectPage(linkLocation) {
        window.location = linkLocation
      }
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <ControlledCarousel />
        <Trubi />
        <AboutCompany />
      </Layout>
    )
  }
}

export default IndexPage
