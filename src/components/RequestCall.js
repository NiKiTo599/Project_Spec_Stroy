import { Button, Modal, Form } from "react-bootstrap"
import React, { useState } from "react"

async function sendMsg(data, call) {
  const url = 'https://api.telegram.org/bot823664651:AAEZ58TtfE6tBPBKpg987tj_ncHFIL3keE4/sendMessage';
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: '602446066',
      parse_mode: "Markdown",
      text:
        "\n*Имя:* " +
        data.get('name') +
        "\n*Телефон:* " +
        data.get("number") +
        "\n*Откуда:* [" +
        window.location.href +
        "](" +
        window.location.href +
        ")",
    })
  });
  call();
}

function submitForm(e, call) {
  e.preventDefault();
  const data = new FormData(e.target);
  sendMsg(data, call);
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
          <Form onSubmit={(e) => submitForm(e, handleClose)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control name='name' type="text" placeholder="Введите ваше имя" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                name="number"
                type="text"
                placeholder="Введите ваш номер"
              />
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
