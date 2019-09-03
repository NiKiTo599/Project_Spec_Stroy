import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/projects.css"

const Projects = () => (
  <Layout>
    <SEO title="Home" />
    <section className="container margin-top">
      <div className="row justify-content-center">
        <Link
          state={{ id: 0 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img style={{ opacity: '0.1'}} className="height" src={require("../images/projects/fon.png")} />
          <p className="title-of-projects">
            Газовая котельная общей тепловой мощностью 24,344 МВт
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 1 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img style={{ opacity: '0.1'}} className="height" src={require("../images/projects/fon.png")} />
          <p className="title-of-projects">
            Техперевооружение котельной АО «Российские космические системы»
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 2 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img style={{ opacity: '0.1'}} className="height" src={require("../images/projects/fon.png")} />
          <p className="title-of-projects">
            Реконструкция котельной с увеличением тепловой производительности до
            14,405 МВт
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>

        <Link
          state={{ id: 3 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img
            className="height"
            src={require("../images/projects/DSCF8246.jpg")}
          />
          <p className="title-of-projects">
            Строительство цеха по производству мелованной бумаги БДМ-7
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 4 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img
            className="height"
            src={require("../images/projects/IMG_1181.jpg")}
          />
          <p className="title-of-projects">
            Строительство древесно подготовительного цеха «Сибирский медведь»
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 5 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img
            className="height"
            src={require("../images/projects/IMG_0237.jpg")}
          />
          <p className="title-of-projects">Строительство цеха резки листов Котласский ЦБК</p>
          <p className="know_more">Узнать больше >></p>
        </Link>

        <Link
          state={{ id: 6 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img className="height" src={require("../images/projects/fon.png")} style={{ opacity: '0.1'}} />
          <p className="title-of-projects">
            Строительство Бакового химического Котласский ЦБК
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 7 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img className="height" src={require("../images/projects/fon.png")} style={{ opacity: '0.1'}} />
          <p className="title-of-projects">
            Строительство завода по производству осажденного мела
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 8 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img
            className="height"
            src={require("../images/projects/20181116_083426.jpg")}
          />
          <p className="title-of-projects">
            Капитальный ремонт технологической эстакады №2 АО «Воскресенские Минеральные удобрения»
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 9 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img className="height" src={require("../images/projects/fon.png")} style={{ opacity: '0.1'}} />
          <p className="title-of-projects">
            Монтаж металлоконструкций Узла энергетического блока
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 10 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img className="height" src={require("../images/projects/fon.png")} style={{ opacity: '0.1'}} />
          <p style={{  color: '#142986' }} className="title-of-projects">
            Монтаж эстакады налива серной кислоты
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>

        <Link
          state={{ id: 11 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img className="height" src={require("../images/projects/fon.png")} style={{ opacity: '0.1'}} />
          <p style={{ color: '#142986' }} className="title-of-projects">
            Монтаж и изоляция трубопроводов соленых стоков
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 12 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img
            className="height"
            src={require("../images/projects/DSC_0692.png")}
          />
          <p className="title-of-projects">Многоквартирный жилой дом с кафе</p>
          <p className="know_more" style={{ bottom: '430px'}}>Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 13 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img className="height" src={require("../images/projects/dsc.jpg")} />
          <p className="title-of-projects">
            Жилые дома №23,24 со встроено- пристроенными помещениями
            общественного назначения и подземным гаражом-стоянкой
          </p>
          <p className="know_more" style={{ bottom: '430px'}}>Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 14 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img className="height" src={require("../images/projects/fon.png")} style={{ opacity: '0.1'}} />
          <p style={{ color: '#142986' }} className="title-of-projects">
            Реконструкция жилого дома № 127 по ул. К. Либкнехта с надстройкой
            дополнительных жилых этажей
          </p>
          <p className="know_more" style={{ bottom: '430px'}}>Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 15 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img className="height" src={require("../images/projects/fon.png")} style={{ opacity: '0.1'}} />
          <p style={{ color: '#142986' }} className="title-of-projects">
            Производство упаковки на основе флексографической и офсетной печати
          </p>
          <p className="know_more" style={{ bottom: '430px'}}>Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 16 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img
            className="height"
            src={require("../images/projects/DSC_0691.png")}
          />
          <p className="title-of-projects">
            Строительство здания: "Автоцентр KIA MOTORS
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>

        <Link
          state={{ id: 17 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img className="height" src={require("../images/projects/fon.png")} style={{ opacity: '0.1'}} />
          <p className="title-of-projects">
            Магазин хозтоваров с объектами обслуживания с организацией
            торгово-офисной пристройки
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 18 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img
            className="height"
            src={require("../images/projects/DSC_0626.png")}
          />
          <p className="title-of-projects long">
            Жилые дома №23 по г/п со встроено-пристроенными помещениями
            общественного назначения
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 19 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img
            className="height"
            src={require("../images/projects/DSC_0669.png")}
          />
          <p className="title-of-projects">
            Автоцентр AUDI AG c сервисным центром
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 20 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img className="height" src={require("../images/projects/fon.png")} style={{ opacity: '0.1'}} />
          <p className="title-of-projects">
            Реконструкция имущественного комплекса ООО "Трайпл"
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>
        <Link
          state={{ id: 21 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img
            className="height"
            src={require("../images/projects/DSC_0590.png")}
          />
          <p className="title-of-projects">
            Комплекс в составе группы жилых домов, торгового комплекса и АЗС
          </p>
          <p className="know_more">Узнать больше >></p>
        </Link>

        <Link
          state={{ id: 22 }}
          to={`/more-about-project`}
          className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 projets__item"
        >
          <img
            className="height"
            src={require("../images/projects/DSC_0607.png")}
          />
          <p className="title-of-projects">Многоквартирный жилой дом с кафе</p>
          <p className="know_more">Узнать больше >></p>
        </Link>
      </div>
    </section>
  </Layout>
)

export default Projects
