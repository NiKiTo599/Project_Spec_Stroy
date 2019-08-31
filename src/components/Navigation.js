import React from "react"

import { Navbar, Nav, NavDropdown } from "react-bootstrap"

import "../styles/navigation.css"

class Navigation extends React.Component {
  render() {
    return (
      <Navbar expand="md" bg="dark" expanded="true">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/services'>Услиги</Nav.Link>
            <Nav.Link href="/projects">Объекты</Nav.Link>
            <Nav.Link href="#link">Клиенты</Nav.Link>
            <Nav.Link href="#link">Аттестаты</Nav.Link>
            <Nav.Link href="#link">Вакансии</Nav.Link>
            <Nav.Link href="/contacts">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Navigation
