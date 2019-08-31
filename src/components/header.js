import { Link } from "gatsby"
import { Button } from "react-bootstrap"
import React from "react"

import "../styles/header.css"
import RequestCall from "./RequestCall";

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__logo" src={require("../images/mainlogo.png")} />
    </Link>
    <div className="header__contact_info">
      <Link to="tel:+79219211065" className="contact_info__number">
        +7 <b className="number__bold">921 921 10 65</b>
      </Link>
    </div>
    <RequestCall />
  </header>
)

export default Header
