import React from "react"

import { Navbar, Nav, NavDropdown } from "react-bootstrap"

import "../styles/navigation.css"

class Navigation extends React.Component {

  render() {

    return (
      <Navbar expand="md" bg="dark" expanded="true">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" onClick={this.changeColor}>
            <Nav.Link className='active__link' href="/services">Услуги</Nav.Link>
            <Nav.Link className='active__link' href="/projects">Объекты</Nav.Link>
            <Nav.Link className='active__link' href="#link">Клиенты</Nav.Link>
            <Nav.Link className='active__link' href="#link">Аттестаты</Nav.Link>
            <Nav.Link className='active__link' href="#link">Вакансии</Nav.Link>
            <NavDropdown
              title="Трубопроводная арматура"
              id="collasible-nav-dropdown"
              className='too_big'
            >
              <NavDropdown.Item href="/404">
                Шаровые краны LD
              </NavDropdown.Item>
              <NavDropdown.Item href="/404">
                Шаровые краны CTC
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/404">
                Труба металлополимерная МПТ
              </NavDropdown.Item>
              <NavDropdown.Item href="/404">
                Проектирование ИТП
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='active__link' href="/contacts">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Navigation
