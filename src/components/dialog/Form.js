import React, {Component} from 'react';

class Form extends Component {
render() {
  return (
    <form>
      <input placeholder='Product Name' type='text' />
      <br/>
      <input placeholder='Price' type='number'/>
      <br/>
      <select placeholder='Category' >
        <option></option>
      </select>
    </form>
  );
}
}

export default Form;