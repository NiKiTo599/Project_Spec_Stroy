import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardOfContacts from "../components/contacts/CardOfContacts"
import Feedback from "../components/contacts/Feedback"
import "../styles/contacts.css"
import ModalWindowForImage from "../components/ModalWindowForImage"

const images = [
  {
    cert: [require("../images/certificates/certificates.png")],
    name: "Сертификат соответствия",
  },
  {
    cert: [require("../images/certificates/certificates_1.png")],
    name: "Разрешение на применение знака соответствия",
  },
]

class Certificates extends React.Component {
  state = {
    show: false,
    id: 0,
  }

  handleShow = e => {
    this.setState({ show: true, id: e.target.id })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <Layout>
        <SEO title="Аттестаты" />
        <section
          className="container contacts__container"
        >
          <div className="row contacts_row align-content-center justify-content-center">
            {images.map((img, i) => (
              <div className="col-xl-5 col-md-12 col-lg-5 col-10" onClick={this.handleShow}>
                <img
                  onClick={this.handleShow}
                  id={i}
                  style={{ height: "25rem" }}
                  src={img.cert[0]}
                />
                <p style={{ fontWeight: '700'}}>{img.name}</p>
              </div>
            ))}
          </div>
          <ModalWindowForImage
            image={images[this.state.id].cert}
            show={this.state.show}
            handleClose={this.handleClose}
          />
        </section>
      </Layout>
    )
  }
}

export default Certificates
