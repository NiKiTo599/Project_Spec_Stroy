import React from "react"

import { Navbar, Nav, NavDropdown } from "react-bootstrap"

import "../styles/navigation.css"

class Navigation extends React.Component {
  render() {
    return (
      <Navbar expand="md" bg="dark" expanded="true">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown href="page-2" title="Услуги" id="basic-nav-dropdown">
              <NavDropdown.Item href="page-2">
                Генеральный подряд
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Строительный инжиниринг
              </NavDropdown.Item>
              <NavDropdown.Item href="civil-works">
                Общестроительные работы
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="projects">Объекты</Nav.Link>
            <Nav.Link href="#link">Клиенты</Nav.Link>
            <Nav.Link href="#link">Аттестаты</Nav.Link>
            <Nav.Link href="#link">Вакансии</Nav.Link>
            <Nav.Link href="#link">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Navigation
