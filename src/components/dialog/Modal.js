import React, {Component} from 'react';
import Form from "./Form";

class Modal extends Component {

  render() {
    return (
      <div>
        <h3>ADD A PRODUCT</h3>
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
