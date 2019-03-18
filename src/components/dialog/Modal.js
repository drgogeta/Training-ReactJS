import React, {Component} from 'react';
import Form from "./Form";

class Modal extends Component {
  render() {
    return (
      <div>
        <h1>ADD A PRODUCT</h1>
        <p>
          Please fill the data requested in this dialog to add aproduct to our table <br/>
          including Product Name, Price and Category.
        </p>
        <Form/>
      </div>
    )
  }
}

export default Modal;
