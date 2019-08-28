import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CivilWorks = () => (
  <Layout>
    <SEO title="Home" />
    <section className="container">
      <div className="row">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Контакты</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Телефон:</Card.Subtitle>
            <Card.Text>+7 921 921 10 65</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Email:</Card.Subtitle>
            <Card.Text>s-stroy298@mail.ru</Card.Text>
            <Card.Title>Адрес</Card.Title>
            <Card.Text>Москва, Ленинский проспект дом 42</Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </section>
  </Layout>
)

export default CivilWorks
