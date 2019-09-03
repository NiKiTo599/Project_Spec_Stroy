import React from "react"
import { ListGroup } from "react-bootstrap"

const CardOfContacts = () => (
  <>
  <ListGroup className='col-12 col-xl-6 col-md-12'>
    <ListGroup.Item action variant="primary">Землянные работы</ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Возведение несущих и ограждающих конструкций зданий и сооружений (полный
      комплекс общестроительных работ)
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Работы по устройству наружных инженерных сетей и оборудованию
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Работы по устройству внутренних инженерных систем
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Работы по защите конструкций и оборудования
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Работы по отделке конструкций и оборудования
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Работы по благоустройству территории
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Монтаж технологического оборудования
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Пусконаладочные работы
    </ListGroup.Item>
  </ListGroup>
  <img className='col-12 col-xl-6 col-md-12' src={require('../../images/services/service_1.jpg')}/>
  <img className='col-12 col-xl-6 col-md-12' src={require('../../images/services/service_2.jpg')}/>
  <ListGroup className='col-12 col-xl-6 col-md-12'>
    <ListGroup.Item action variant="primary">
      Контроль качества работ
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Проведение инженерных изысканий
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Проектирование
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Монтаж оборудования, работающего под давлением (сосуды, блочно-комплектные
      устройства и др.)
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Монтаж котельного и металлургического оборудования
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Монтаж трубопроводов пара и горячей воды, технологических трубопроводов
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Монтаж металлоконструкций любой сложности
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Пусконаладочные работы
    </ListGroup.Item>
    <ListGroup.Item action variant="primary">
      Ввод в эксплуатацию
    </ListGroup.Item>
  </ListGroup>
  </>
)

export default CardOfContacts
