import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/services.css'
import OurServices from "../components/services/OurServices"
import CardServices from "../components/services/CardServices"

const CivilWorks = () => (
  <Layout>
    <SEO title="Home" />
    <section className="container">
      <div className="row contacts_row justify-content-center">
        <img
          className="col-xl-6 col-lg-12 col-md-12 image_services"
          src={require("../images/services/main_service.jpg")}
        />
        <div className="col-xl-6 col-lg-12 col-md-12">
          <img
            className="about-company__logo"
            src={require("../images/mainlogo.png")}
          />
          <p style={{ fontWeight: "700" }} className="about-company__text_2">
            Сегодня «СПЕЦСТРОЙ 298» — это высококлассная команда профессионалов,
            обладающая уникальным опытом реализации самых сложных задач,
            предлагающая комплексные решения в реализации проектов «под ключ»
            (генеральный подряд).
          </p>
          <p className="about-company__text_2">
            Ключевая компетенция компании «СПЕЦСТРОЙ 298» – строительство
            промышленных и жилых объектов, объектов инфраструктуры «под ключ». В
            нашей зоне ответственности могут быть: полный комплекс
            общестроительных работ, монтаж наружных инженерных сетей, монтаж
            внутренних инженерных коммуникаций, монтаж оборудования, работающего
            под давлением, монтаж котельного и металлургического оборудования,
            монтаж трубопроводов пара и горячей воды, технологических
            трубопроводов, монтаж металлоконструкций любой сложности.
          </p>
          <p className="about-company__text_2">
            Мы готовы выполнить полный спектр работ в области промышленного
            строительства. Обладая необходимым производственным потенциалом и
            используя современные технологии, мы производим общестроительные
            работы на высшем уровне.
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <h1 style={{ textAlign: 'center', color: '#142986'}} className='col-12'>Наши услуги</h1>
        <OurServices  />
        <CardServices className='col-xl-8'/>
      </div>
    </section>
  </Layout>
)

export default CivilWorks
