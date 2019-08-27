import React, { useState } from "react"

import { Carousel, Jumbotron, Button } from "react-bootstrap"

import "../../styles/carousel.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  return (
    <Carousel
      as="section"
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../images/carousel_1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <Jumbotron>
            <h2>Труба металлополимерная МПТ</h2>
            <p>Весь спектр услуг по металлополимерным трубам МПТ.</p>
            <Button variant="primary">Узнайте больше</Button>
          </Jumbotron>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../images/carousel_2.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <Jumbotron>
            <h2>Труба металлополимерная МПТ</h2>
            <p>Весь спектр услуг по металлополимерным трубам МПТ.</p>
            <Button variant="primary">Узнайте больше</Button>
          </Jumbotron>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../images/carousel_3.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <Jumbotron>
            <h2>Труба металлополимерная МПТ</h2>
            <p>Весь спектр услуг по металлополимерным трубам МПТ.</p>
            <Button variant="primary">Узнайте больше</Button>
          </Jumbotron>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel
