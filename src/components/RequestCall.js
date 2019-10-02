import { Button, Modal, Form } from "react-bootstrap"
import React, { useState } from "react"

async function sendMsg(data, call) {
  const viber = "4a45366195a7d37d-c3a73804641a6af-7bdb449b907134a1"
  const url = "https://api.telegram.org/bot823664651:AAEZ58TtfE6tBPBKpg987tj_ncHFIL3keE4/sendMessage?chat_id=-1001226362028"
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      parse_mode: "Markdown",
      text:
        "\n*Имя:* " +
        data.get("name") +
        "\n*Телефон:* " +
        data.get("number") +
        "\n*Откуда:* [" +
        window.location.href +
        "](" +
        window.location.href +
        ")",
    }),
  })
  call()
}

function submitForm(e, call) {
  e.preventDefault()
  const data = new FormData(e.target)
  sendMsg(data, call)
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
          <Form onSubmit={e => submitForm(e, handleClose)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                name="name"
                type="text"
                placeholder="Введите ваше имя"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                name="number"
                type="text"
                placeholder="Введите ваш номер"
              />
            </Form.Group>
            <Button
              style={{ backgroundColor: "#142986" }}
              variant="primary"
              type="submit"
            >
              Заказать звонок
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default RequestCall
