import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/moreAboutProjects.css"
import ImageGallery from "react-image-gallery"

import { projects } from "../data/projects.js"

class MoreAboutProjects extends React.Component {
  constructor({ location }) {
    super(location)
    this.state = location.state
  }
  render() {
    if (!this.state) {
      this.state = {
        id: `0`
      }
    }
    const project = projects[this.state.id]
    const imagesObj = project.img.map(content => {
      return {
        original: require(`../images/projects/${content}`),
        thumbnail: require(`../images/projects/${content}`),
        sizes: "48*48",
      }
    })
    return (
      <Layout>
        <SEO title="Home" />
        <section className="container">
          <div className="row contacts_row justify-content-center">
            {/* project.img.map(content => (
              <img
                className="col-xl-6"
                src={require(`../images/projects/${content}`)}
              />
            )) */}
            <ImageGallery
              style={{ marginLeft: "2rem" }}
              className="col-xl-6 height_for_gallery"
              items={imagesObj}
            />
            <div className="col-xl-6">
              <h1 className="title_of_projects">{project.name}</h1>
              <h3 style={{ color: "#131214af" }}>
                Заказчик: {project.customer}
              </h3>
              <h3 style={{ color: "#131214af" }}>Перечень выполняемых работ</h3>
              <ul style={{ listStyle: "none" }}>
                {project.works.map(content => (
                  <li style={{ color: "#1312145d", fontWeight: "900" }}>
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default MoreAboutProjects
