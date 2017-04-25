import React, { Component } from 'react';
import ModalWrapper from './modals/modal-wrapper';
import modalData from '../data/modal-data.js';

export default class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: modalData
    };
  }

  render() {
    return (
      <div>
      	<ModalWrapper buttonText={this.state.data.button} title={this.state.data.title} body={this.state.data.body}/>
      </div>
    );
  }
}
