import React from "react"
import { Form, Button, Alert } from "react-bootstrap"
import $ from 'jquery'

class Feedback extends React.Component {
  /* componentDidMount() {
    $(document).ready(function() {
      $("#feedback").submit(function() {
        var form = $(this)
        var error = false
        form.find("input, textarea").each(function() {
          if ($(this).val() == "") {
            alert('Зaпoлнитe пoлe "' + $(this).attr("placeholder") + '"!')
            error = true
          }
        })
        if (!error) {
          var data = form.serialize()
          $.ajax({
            type: "POST",
            url: "send.php",
            dataType: "json",
            data: data,
            beforeSend: function(data) {
              form.find('input[type="submit"]').attr("disabled", "disabled")
            },
            success: function(data) {
              if (data["error"]) {
                alert(data["error"])
              } else {
                alert("Письмo было отправлено, проверьте почту.")
              }
            },
            error: function(xhr, ajaxOptions, thrownError) {
              alert(xhr.status)
              alert(thrownError)
            },
            complete: function(data) {
              form.find('input[type="submit"]').prop("disabled", false)
            },
          })
        }
        return false // вырубaeм стaндaртную oтпрaвку фoрмы
      })
    })
  } */

  state = {
    show: false,
  }

  async sendMsg(data) {
    /* console.log(data.get("name"))
    const url =
      "https://api.telegram.org/bot823664651:AAEZ58TtfE6tBPBKpg987tj_ncHFIL3keE4/sendMessage?chat_id=-1001226362028"
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
    })
    this.setState({ show: true }) */
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json?key=181e929628946485818246a0e439da0b-us4',
      data: {
        'key': '181e929628946485818246a0e439da0b-us4',
        'message': {
          'from_email': 'akulichnikita0@gmail.com',
          'to': [
              {
                'email': 'akulich.nikita@mail.ru',
                'name': 'RECIPIENT NAME (OPTIONAL)',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'YOUR SUBJECT HERE!',
          'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
        }
      }
     }).done(function(response) {
       console.log(response); // if you're into that sorta thing
     });
  }

  submitForm(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    this.sendMsg(data)
  }

  alertFunction() {
    if (this.state.show) {
      return <Alert variant={"primary"}>Успешно отпрвлено!</Alert>
    }
    return null
  }

  render() {
    return (
      <Form onSubmit={e => this.submitForm(e)} className="col-xl-5">
        <h2 style={{ color: "#142986", textAlign: "center" }}>
          Обратная связь
        </h2>
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
      </Form>
    )
  }
}

export default Feedback
