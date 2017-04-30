import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalWrapper = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {

    return (
      <div>
        <h1>Here come the Modals</h1>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          {this.props.buttonText}
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.body}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
});

export default ModalWrapper;