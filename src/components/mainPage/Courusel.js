import React, { useState } from "react"

import { Carousel, Jumbotron, Button, Alert } from "react-bootstrap"

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
          <ul className="list_for_services">
            <li>Проведение инженерных изысканий</li>
            <li>Проектирование</li>
            <li>Полный комплекс строительно-монтажных и специальных работ</li>
          </ul>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../images/carousel_2.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <ul className="list_for_services">
            <li>
              Монтаж оборудования, работающего под давлением (сосуды,
              блочно-комплектные устройства и др.)
            </li>
            <li>Монтаж котельного и металлургического оборудования</li>
            <li>
              Монтаж трубопроводов пара и горячей воды, технологических
              трубопроводов
            </li>
          </ul>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../images/carousel_3.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <ul className="list_for_services">
            <li>Монтаж металлоконструкций любой сложности</li>
            <li>Пусконаладочные работы</li>
            <li>Ввод в эксплуатацию</li>
          </ul>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel
