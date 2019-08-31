import React from "react"
import { Card } from "react-bootstrap"

const CardOfContacts = () => (
  <Card className='col_contacts_card col-xl-3' style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Title style={{ color: '#142986'}} className='icon_phone'>Контакты</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Телефон:</Card.Subtitle>
      <Card.Text>+7 921 921 10 65</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">Email:</Card.Subtitle>
      <Card.Text>s-stroy298@mail.ru</Card.Text>
      <Card.Title style={{ color: '#142986', marginTop: '4rem'}} className='icon_location'>Адрес</Card.Title>
      <Card.Text>Москва, Ленинский проспект дом 42</Card.Text>
    </Card.Body>
  </Card>
)

export default CardOfContacts
