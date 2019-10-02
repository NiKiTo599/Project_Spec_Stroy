import React, { useState } from "react"
import {
  Button,
  Modal,
  Form,
  Nav,
  Tab,
  Row,
  Col,
  ListGroup,
  Sonnet,
} from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/jobs.css"

import { jobs } from "../data/jobs"

class Jobs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }
  async sendMsg(data, call) {
    const url =
      "https://api.telegram.org/bot823664651:AAEZ58TtfE6tBPBKpg987tj_ncHFIL3keE4/sendMessage?chat_id=-1001226362028"
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        parse_mode: "Markdown",
        text:
          "\n*Имя:* " +
          data.get("name") +
          "\n*Телефон:* " +
          data.get("number") +
          "\n*Email:* " +
          data.get("email") +
          "\n*Сообщение:* " +
          data.get("text") +
          "\n*Откуда:* [" +
          window.location.href +
          "](" +
          window.location.href +
          ")",
      }),
    })
    call()
  }
 /*  keySkils(content) {
    if (content.key_skils) {
      return (
        <div className="col-8">
          <h6>Ключевые навыки</h6>
          <ul className="jobs__list">
            {content.key_skils.map(item => (
              <li>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return null
  } */

  submitForm(e, call) {
    e.preventDefault()
    const data = new FormData(e.target)
    this.sendMsg(data, call)
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = () => {
    console.log(this)
    this.setState({ show: true })
  }

  feedBack() {
    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Отклик</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={e => this.submitForm(e, this.handleClose)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Введите ваше имя"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  name="number"
                  type="text"
                  placeholder="Введите ваш номер"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Введите ваш email"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  name="text"
                  placeholder="Введите сопроводительное сообщение"
                  as="textarea"
                  rows="3"
                />
              </Form.Group>
              <Button
                style={{ backgroundColor: "#142986" }}
                variant="primary"
                type="submit"
              >
                Откликнуться
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    )
  }

  render() {
    return (
      <Layout>
        <SEO title="Вакансии" />
        <section style={{ color: "#142986" }} className="container jobs-cont">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className='justify-content-center contacts_row'>
              <Col xl={5} lg={4} sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="1">Производитель работ</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="2">Бухгалтер</Nav.Link>
                    <Nav.Link eventKey="0">Инженер ПТО</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xl={5} lg={6} sm={9}>
                <Tab.Content>
                  {jobs.map((content, i) => (
                    <>
                      <Tab.Pane eventKey={`${i}`}>
                        <div className="  justify-content-center">
                          <h5 className="">{content.name}</h5>
                        </div>
                        <div className="row justify-content-center">
                          <h6 className="">Обязанности</h6>
                        </div>
                        <div className="row justify-content-center">
                          <ul className=" jobs__list">
                            {content.duties.map(item => (
                              <li>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className=" justify-content-center">
                          <div className="">
                            <h6>Требования</h6>
                            <ul className="jobs__list">
                              {content.requirments.map(item => (
                                <li>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="">
                            <h6>Условия</h6>
                            <ul className="jobs__list">
                              {content.conditions.map(item => (
                                <li>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className=" justify-content-center">
                          <h6 className="">
                            Занятость:{" "}
                            <span style={{ color: "#0b1c68c5" }}>
                              {content.time}
                            </span>
                          </h6>
                          <h6 className="">
                            Опыт:{" "}
                            <span style={{ color: "#0b1c68c5" }}>
                              {content.experience}
                            </span>
                          </h6>
                          <Button
                            className=" btn_otclick"
                            variant="outline-secondary"
                            onClick={this.handleShow}
                          >
                            Откликнуться
                          </Button>
                        </div>
                      </Tab.Pane>
                    </>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
          {this.feedBack()}
        </section>
      </Layout>
    )
  }
}

export default Jobs
