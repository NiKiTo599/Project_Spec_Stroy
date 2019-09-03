import React from "react"
import { Card } from "react-bootstrap"

const CardServices = () => (
  <Card bg="primary" text="white" style={{ width: "80vw", marginTop: '2rem' }}>
    <Card.Header>Наши компетенции</Card.Header>
    <Card.Body style={{ backgroundColor: '#545454b0'}}>
      <Card.Text>
        ООО «СПЕЦСТРОЙ 298» состоит в Ассоциации строителей «ЭкспертСтрой»,
        имеет допуск к выполнению работ, которые оказывают влияние на
        безопасность объектов капитального строительства, включая особо опасные
        и технически сложные объекты (регистрационный номер 2079 от 25.12.2018
        г.); Работа компании организована согласно стандартам ISO 9001.
      </Card.Text>
    </Card.Body>
  </Card>
)

export default CardServices
