import React from "react"

import "../../styles/aboutCompany.css"

const AboutCompany = () => (
  <section className="about-company">
    <img
      className="about-company__logo"
      src={require("../../images/logo_3.png")}
    />
    <div className="about-company__container">
      <h1 className="title-company">Строительная компания СПЕЦСТРОЙ298</h1>
      <p className="about-company__text">
        Основными направлениями деятельности ООО «СПЕЦСТРОЙ 298» является
        выполнение полного комплекса строительно-монтажных работ «под ключ» и
        комплексная поставка: трубопроводной арматуры; приборов контроля и учета
        тепловой энергии теплоносителей и других жидких сред металлополимерных
        труб МПТ; проектирование, изготовление и монтаж индивидуальных тепловых
        пунктов (ИТП).
      </p>
      <p className="about-company__text">
        Наша цель — найти и сформировать для каждого нашего клиента то
        уникальное предложение, которое позволит наиболее полно и в кратчайшие
        сроки удовлетворить его потребности в определенном виде продукции и
        услуг. Мы работаем как с отечественными, так и зарубежными
        производителями, ориентируясь при сотрудничестве в первую очередь на
        качество комплектующих изделий, которые проходят жесточайшую проверку по
        всем своим эксплуатационным характеристикам.{" "}
      </p>
      <p className="about-company__text">
        Мы предлагаем только те решения, в эффективности которых мы уверенны на
        100%. Мы предлагаем своим клиентам широкий ассортимент трубопроводной
        арматуры различных конфигураций и типоразмеров: задвижки, клапаны
        запорные, затворы обратные, предохранительная и отсечная арматура,
        детали трубопроводов, регуляторы давления, краны шаровые, фонтанная
        арматура. Данная продукция может быть укомплектована редукторами,
        электро- и гидроприводами.
      </p>
    </div>
  </section>
)

export default AboutCompany