import React from "react"

import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const Navigation = () => (
  <>
    <style type="text/css">
      {`
        .navbar {
          width: 100%;
        }
        .navbar-expand-sm {
          justify-content: center!important;
        }
        .mr-auto, .mx-auto {
          margin: auto;
          width: 70rem;
          justify-content: space-between;
        }
        .nav-link {
          color: white!important;
        }
      `}
    </style>
    <Navbar bg="dark" expand="sm" expanded="true">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Услуги" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Генеральный подряд
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Строительный инжиниринг
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Общестроительные работы
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Объекты</Nav.Link>
          <Nav.Link href="#link">Клиенты</Nav.Link>
          <Nav.Link href="#link">Аттестаты</Nav.Link>
          <Nav.Link href="#link">Вакансии</Nav.Link>
          <Nav.Link href="#link">Контакты</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)

export default Navigation
