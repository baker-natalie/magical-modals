import React, { Component } from 'react';
import ModalWrapper from './modals/modal-wrapper';
//import modalData from '../data/modal-data.js';

export default class App extends Component {
	/*constructor(props) {
    super(props);
      this.state = {
        data: modalData
      };
  	}*/

  render() {
    return (
      <div>
      	<ModalWrapper buttonText={"Click me I'm a button"} title={"Modal"} body={"Look at me I'm a modal"}/>
      </div>
    );
  }
}
