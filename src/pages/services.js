import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import OurServices from "../components/services/OurServices"
import CardServices from "../components/services/CardServices";

const CivilWorks = () => (
  <Layout>
    <SEO title="Home" />
    <img src={require('../images/services/main_service.jpg')} />
    <p className="about-company__text">
      Ключевая компетенция компании «СПЕЦСТРОЙ 298» – строительство промышленных
      и жилых объектов, объектов инфраструктуры «под ключ». В нашей зоне
      ответственности могут быть: полный комплекс общестроительных работ, монтаж
      наружных инженерных сетей, монтаж внутренних инженерных коммуникаций,
      монтаж оборудования, работающего под давлением, монтаж котельного и
      металлургического оборудования, монтаж трубопроводов пара и горячей воды,
      технологических трубопроводов, монтаж металлоконструкций любой сложности.
    </p>
    <p className="about-company__text">
      Мы готовы выполнить полный спектр работ в области промышленного
      строительства. Обладая необходимым производственным потенциалом и
      используя современные технологии, мы производим общестроительные работы на
      высшем уровне.
    </p>
    <h1>Наши услуги</h1>
    <OurServices />
    <CardServices />
  </Layout>
)

export default CivilWorks
