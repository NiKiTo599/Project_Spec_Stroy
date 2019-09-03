import React from "react"
import { Button } from "react-bootstrap"

import "../../styles/aboutCompany.css"

const Trybi = () => (
  <section
    className="justify-content-center"
    style={{
      backgroundImage:
        "url(http://theme-fusion.com/avadaxml/wp-content/uploads/2013/10/slide_4.jpg)",
      width: "100vw",
    }}
  >
    <div className="row contacts_row align-items-center">
      <div className="col-xl-6">
        <h2 style={{ color: "#142986" }}>
          Дистрибьютор энергосберегающего оборудования
        </h2>
        <h4 style={{ color: "#1312145d" }}>«ТБН Энергосервис»</h4>
        <p>
          Строительство и комплексные поставки трубопроводной арматуры и
          оборудования для нужд теплоэнергетики, ЖКХ, водоканалов, нефтегазового
          сектора и промышленности.
        </p>
        <Button href="/contacts" style={{ backgroundColor: "#142986" }}>
          Свяжитесь с нами
        </Button>
      </div>
      <img
        className="col-xl-6 trubi__img"
        src={require("../../images/trubi.png")}
      />
    </div>
  </section>
)

export default Trybi
