import { Button, Modal, Form } from "react-bootstrap"
import React, { useState } from "react"

getNumber = () => {
 return document.getElementById('number').value;
}

submitForm = (event) => {
  event.preventDefault();

  const json = getNumber();

  fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  });
}

function RequestCall() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Заказать звонок
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Заказать звонок</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitForm}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Введите ваше имя" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control id='number' type="text" placeholder="Введите ваш номер" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default RequestCall
