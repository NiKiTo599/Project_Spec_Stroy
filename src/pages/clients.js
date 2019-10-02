import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/clients.css"

const images = [
  "http://triple.by/sites/all/themes/triple/logo.png",
  "https://s.domovita.by/images/00/7ba3b0993c47f160852ff37df5610225.jpg",
  "https://s.domovita.by/images/fc/e065c3743ce48fcb0c52d36b3609c829.png",
  require("../images/clients/logo_1.png"),
  require("../images/clients/logo_2.svg"),
  require("../images/clients/logo_3.png"),
  require("../images/clients/logo_4.jpg"),
  require("../images/clients/logo_5.png"),
  require("../images/clients/logo_6.png"),
  require("../images/clients/logo_7.png"),
]

const Clients = () => (
  <Layout>
    <SEO title="Клиенты" />
    <section className="container">
      <div className="row contacts_row justify-content-center align-items-center">
        {
          images.map(img => (
            <div className='col-xl-4 client'>
              <img src={img} className='clients__logo'/>
              <span className='arrow'>Посмотреть отзыв</span>
            </div>
          ))
        }
      </div>
    </section>
  </Layout>
)

export default Clients
