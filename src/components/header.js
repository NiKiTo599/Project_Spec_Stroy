import { Link } from "gatsby"
import { Button } from 'react-bootstrap'
import PropTypes from "prop-types"
import React from "react"

import '../styles/header.css';

const Header = () => (
  <header className="header">
    <img className="header__logo" src={require("../images/logoza.png")} />
    <div className="header__contact_info">
      <Link to="tel:+79219211065" className="contact_info__number">
        +7 <b className="number__bold">921 921 10 65</b>
      </Link>
    </div>
    <Button variant="outline-secondary">Заказать звонок</Button>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
