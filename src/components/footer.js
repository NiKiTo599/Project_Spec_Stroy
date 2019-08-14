import React from "react"
import { Link } from 'gatsby'

import "../styles/footer.css"

const Footer = () => (
  <footer>
    <span className="name_of_company">© ООО СПЕЦСТРОЙ298</span>
    <div className="footer_contacts">
      <Link to="+7 921 921 10 65" className="footer_number">+7 921 921 10 65</Link>
      <Link className="footer_mail" to="mailto:s-stroy298@mail.ru">s-stroy298@mail.ru</Link>
    </div>
  </footer>
)

export default Footer
