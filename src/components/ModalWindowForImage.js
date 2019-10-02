import React from "react"
import { Modal, Row } from "react-bootstrap"

class ModalWindowForImage extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton></Modal.Header>
        {this.props.image.map(img => (
          <img className="mepos__iframe" src={img} />
        ))}
      </Modal>
    )
  }
}

export default ModalWindowForImage
