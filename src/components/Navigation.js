import React from "react"

import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import $ from "jquery"

import "../styles/navigation.css"

class Navigation extends React.Component {

  componentDidMount() {
    this.document = document;
  }

  componentDidMount() {
    $(this.document).ready(function() {
      $(".nav-link").each(function() {
        if (
          "http://localhost:8000" + $(this).attr("href") ==
          window.location.href
        ) {
          $(this).addClass("active__link")
        } else if (
          "http://localhost:8000" + $(this).attr("href") + "/" ==
          window.location.href
        ) {
          $(this).addClass("active__link")
        }
      })
    })
  }

  render() {
    return (
      <Navbar expand="md" bg="dark" expanded="true">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ color: 'white'}} href="/">Главная</Nav.Link>
            <Nav.Link style={{ color: 'white'}} href="/services">Услуги</Nav.Link>
            <Nav.Link style={{ color: 'white'}} href="/projects">
              Объекты
            </Nav.Link>
            <Nav.Link style={{ color: 'white'}} href="/clients">Клиенты</Nav.Link>
            <Nav.Link style={{ color: 'white'}} href="/certificates">Аттестаты</Nav.Link>
            <Nav.Link style={{ color: 'white'}} href="/jobs">Вакансии</Nav.Link>
            <Nav.Link style={{ color: 'white'}} href='/pipes'>Труба металлополимерная МПТ</Nav.Link>
            <Nav.Link style={{ color: 'white'}} href="/contacts">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Navigation
