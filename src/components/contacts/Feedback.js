import React from "react"
import { Form, Button, Alert } from "react-bootstrap"

class Feedback extends React.Component {

  state = {
    show: false
  }

  async sendMsg(data) {
    console.log(data.get("name"))
    const url =
      "https://api.telegram.org/bot823664651:AAEZ58TtfE6tBPBKpg987tj_ncHFIL3keE4/sendMessage"
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        chat_id: "602446066",
        parse_mode: "Markdown",
        text:
          "\n*Имя:* " +
          data.get("name") +
          "\n*Email:* " +
          data.get("email") +
          "\n*Message:* " +
          data.get("message") +
          "\n*Откуда:* [" +
          window.location.href +
          "](" +
          window.location.href +
          ")",
      }),
    });
    this.setState({show: true});
  }

  submitForm(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    this.sendMsg(data)
  }

  alertFunction() {
    if (this.state.show) {
      return <Alert variant={'primary'}>Успешно отпрвлено!</Alert>
    }
    return null;
  }

  render() {
    return (<Form onSubmit={e => this.submitForm(e)} className="col-xl-5">
    <h2 style={{ color: "#142986", textAlign: "center" }}>Обратная связь</h2>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label style={{ color: "#142986" }}>
        Ваш email или номер телефона
      </Form.Label>
      <Form.Control
        name="email"
        style={{ color: "#142986" }}
        type="text"
        placeholder="name@example.com"
      />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label style={{ color: "#142986" }}>Ваше имя</Form.Label>
      <Form.Control
        name="name"
        style={{ color: "#142986" }}
        type="text"
        placeholder="Имя"
      />
    </Form.Group>
    <Form.Group>
      <Form.Label style={{ color: "#142986" }}>Сообщение</Form.Label>
      <Form.Control
        style={{ color: "#142986" }}
        placeholder="Сообщение"
        as="textarea"
        rows="3"
        name="message"
      />
    </Form.Group>
    {this.alertFunction()}
    <Button
      style={{ backgroundColor: "#142986" }}
      variant="primary"
      type="submit"
    >
      Отправить
    </Button>
  </Form>)
  }
}

export default Feedback
